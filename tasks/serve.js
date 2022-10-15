const { series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const { scss } = require('./scss');
const { twig } = require('./twig');
const { javascript } = require('./javascript');
const { img } = require('./img');
const { fonts } = require('./fonts');
const { video } = require('./video');
const { svgsprite } = require('./svgsprite');
const { svgspritehtml } = require('./svgspritehtml');
const config = require('./config');

const serve = () => {
  browserSync.init({
    server: config.output,
    startPath: 'index.html',
    open: false,
    port: 8081,
  });

  watch(config.pages.watch).on('add', series(twig, browserSync.reload));
  watch(config.pages.watch).on('change', series(twig, browserSync.reload));
  watch(config.pages.watch).on('unlink', series(twig, browserSync.reload));

  watch(config.styles.watch).on('add', series(scss, browserSync.reload));
  watch(config.styles.watch).on('change', series(scss, browserSync.reload));
  watch(config.styles.watch).on('unlink', series(scss, browserSync.reload));

  watch(config.scripts.watch).on('add', series(javascript, browserSync.reload));
  watch(config.scripts.watch).on('change', series(javascript, browserSync.reload));

  watch(config.img.input).on('add', series(img, browserSync.reload));

  watch(config.video.input).on('add', series(video, browserSync.reload));

  watch(config.fonts.input).on('add', series(fonts, browserSync.reload));

  watch(config.svgsprite.input).on('add', series(svgsprite, svgspritehtml, browserSync.reload));
  watch(config.svgsprite.input).on('change', series(svgsprite, svgspritehtml, browserSync.reload));
};

exports.serve = serve;
