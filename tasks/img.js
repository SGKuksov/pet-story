const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
// const webp = require('gulp-webp');
const flatten = require('gulp-flatten');
const config = require('./config');

const img = () =>
  src(config.img.input).pipe(plumber(config.notify)).pipe(flatten()).pipe(dest(config.img.output));

// TODO[@sgkuksov] Fix webp
// .pipe(webp())
// .pipe(dest(config.img.output));

// TODO[@sgkuksov] Add sharp
exports.img = img;
