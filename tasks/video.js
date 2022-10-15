const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const config = require('./config');

const video = () =>
  src(config.video.input).pipe(plumber(config.notify)).pipe(dest(config.video.output));

exports.video = video;
