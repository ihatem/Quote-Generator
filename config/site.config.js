const path = require('path');
const fs = require('fs');

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

const config = {
  // Your website's name, used for favicon meta tags
  site_name: 'quote-generator',

  // Your website's description, used for favicon meta tags
  site_description: 'A small and responsive website that generates random design quotes using the QuotesOnDesign.com API with jquery and SASS as part of the freecodecamp exercice.',

  // Your website's URL, used for sitemap
  site_url: 'https://ihatem.github.io/quote-generator/',

  // The viewport meta tag added to your HTML page's <head> tag
  viewport: 'width=device-width,minimum-scale=1,maximum-scale=1',

  // Source file for favicon generation. 512x512px recommended.
  favicon: path.join(ROOT, '/src/images/favicon.png'),

  // Local development URL
  dev_host: 'localhost',

  // Local development port
  port: process.env.PORT || 8000,

  // Advanced configuration, edit with caution!
  env: process.env.NODE_ENV,
  root: ROOT,
  paths: {
    config: 'config',
    src: 'src',
    dist: 'dist',
  },
  package: JSON.parse(
    fs.readFileSync(path.join(ROOT, '/package.json'), { encoding: 'utf-8' }),
  ),
};

module.exports = config;
