const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const config = require('./config');

// TODO[@sgkuksov] Add filenames
// https://www.npmjs.com/package/gulp-filenames

const copyStatic = () =>
  src(config.static.input).pipe(plumber(config.notify)).pipe(dest(config.static.output));

exports.copyStatic = copyStatic;
