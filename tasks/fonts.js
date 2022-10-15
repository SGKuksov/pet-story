const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const config = require('./config');

const fonts = () =>
  src(config.fonts.input).pipe(plumber(config.notify)).pipe(dest(config.fonts.output));

exports.fonts = fonts;
