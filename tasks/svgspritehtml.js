const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const del = require('del');
const fs = require('fs');
const config = require('./config');

const svgspritehtml = (cb) => {
  fs.readFileSync(`${config.svgsprite.output}sprite.symbol.html`, 'utf-8');

  src(`${config.svgsprite.output}sprite.symbol.html`)
    .pipe(plumber(config.notify))
    .pipe(rename('svgsprite-demo.html'))
    .pipe(dest(config.svgsprite.viewhtml));

  del(`${config.svgsprite.output}sprite.symbol.html`);

  cb();
};

exports.svgspritehtml = svgspritehtml;
