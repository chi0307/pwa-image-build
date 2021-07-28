const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const [filePath] = process.argv.slice(2);

async function draw({ width, height, img, outputFileName }) {
  let canvas = new createCanvas(width, height); //畫布

  let ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, width, height); //繪畫範圍

  await fs.writeFileSync(`./dist/${outputFileName}`, canvas.toBuffer());
}

async function init() {
  const img = await loadImage(filePath);

  const imageConfigs = [
    {
      width: 192,
      height: 192,
      outputFileName: 'android-chrome-192x192.png',
    },
    {
      width: 512,
      height: 512,
      outputFileName: 'android-chrome-512x512.png',
    },
    {
      width: 192,
      height: 192,
      outputFileName: 'android-chrome-maskable-192x192.png',
    },
    {
      width: 512,
      height: 512,
      outputFileName: 'android-chrome-maskable-512x512.png',
    },
    {
      width: 60,
      height: 60,
      outputFileName: 'apple-touch-icon-60x60.png',
    },
    {
      width: 76,
      height: 76,
      outputFileName: 'apple-touch-icon-76x76.png',
    },
    {
      width: 120,
      height: 120,
      outputFileName: 'apple-touch-icon-120x120.png',
    },
    {
      width: 152,
      height: 152,
      outputFileName: 'apple-touch-icon-152x152.png',
    },
    {
      width: 180,
      height: 180,
      outputFileName: 'apple-touch-icon-180x180.png',
    },
    {
      width: 180,
      height: 180,
      outputFileName: 'apple-touch-icon.png',
    },
    {
      width: 16,
      height: 16,
      outputFileName: 'favicon-16x16.png',
    },
    {
      width: 32,
      height: 32,
      outputFileName: 'favicon-32x32.png',
    },
    {
      width: 144,
      height: 144,
      outputFileName: 'msapplication-icon-144x144.png',
    },
    {
      width: 270,
      height: 270,
      outputFileName: 'mstile-150x150.png',
    },
  ];

  for (let { width, height, outputFileName } of imageConfigs) {
    await draw({ width, height, img, outputFileName });
  }
}

init();
