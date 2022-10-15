const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('node-sass'));
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-cleancss');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const objectFitImages = require('postcss-object-fit-images');
const { reload } = require('browser-sync').create();
const gulpif = require('gulp-if');
const config = require('./config');

const { path } = config.styles.output;
const { name } = config.styles.output;

const isDev = process.env.NODE_ENV === 'development';

const scss = () => {
  const plugins = [autoprefixer(), objectFitImages()];

  return src(config.styles.input)
    .pipe(plumber(config.notify))
    .pipe(gulpif(isDev, sourcemaps.init()))
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(postcss(plugins))
    .pipe(gulpif(isDev, sourcemaps.write('/')))
    .pipe(gulpif(!isDev, cleanCSS()))
    .pipe(rename(name))
    .pipe(dest(path))
    .pipe(reload({ stream: true }));
};

exports.scss = scss;
