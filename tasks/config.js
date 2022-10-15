const notify = require('gulp-notify');
const { resolve } = require('path');

const build = resolve(__dirname, '../docs');

module.exports = {
  output: build,
  notify: {
    errorHandler: (err) => {
      notify.onError({
        title: 'Error',
        message: err.message,
      })(err);
    },
  },
  server: {
    watch: `docs`,
  },
  scripts: {
    input: resolve(__dirname, '../src/assets/scripts/main.ts'),
    // jquery: resolve(__dirname, '../src/assets/scripts/jquery-scripts.js'),
    watch: [`src/assets/**/*.{js,ts}`, `src/blocks/**/*.{js,ts}`, `src/components/**/*.{js,ts}`],
    output: resolve(__dirname, '../docs/scripts'),
    todo: {
      input: [`src/assets/**/*.{js,ts}`, `src/blocks/**/*.{js,ts}`, `src/components/**/*.{js,ts}`],
      output: `todos`,
      name: `js.todo.md`,
    },
  },
  styles: {
    input: `src/assets/styles/app.scss`,
    watch: [`src/assets/styles/**/*.scss`, `src/blocks/**/*.scss`, `src/components/**/*.scss`],
    output: {
      path: `docs/css`,
      name: `style.css`,
    },
    todo: {
      input: [`src/assets/styles/**/*.scss`, `src/blocks/**/*.scss`, `src/components/**/*.scss`],
      output: `todos`,
      name: `css.todo.md`,
    },
  },
  pages: {
    input: `src/pages/*.twig`,
    watch: [
      `src/assets/layout/*.twig`,
      `src/pages/**/*.twig`,
      `src/blocks/**/*.twig`,
      `src/components/**/*.twig`,
    ],
    temp: `temp`,
    output: `docs/`,
    todo: {
      input: [
        `src/assets/layout/*.twig`,
        `src/pages/**/*.twig`,
        `src/blocks/**/*.twig`,
        `src/components/**/*.twig`,
      ],
      output: `todos`,
      name: `html.todo.md`,
    },
  },
  fonts: {
    input: `src/assets/fonts/**/*.{ttf,eot,svg,woff,woff2}`,
    output: `docs/fonts/`,
  },
  favicons: {
    input: `src/favicons/*.{ico,png,svg}`,
    output: `docs/favicons/`,
  },
  img: {
    input: `src/img/**/*.{jpg,png,jpeg,webp,svg}`,
    output: `docs/img/`,
  },
  video: {
    input: `src/video/**/*.{mp4,avi,mov}`,
    output: `docs/video/`,
  },
  svg: {
    input: `src/components/**/*.svg`,
    output: `docs/icons/`,
  },
  svgsprite: {
    input: `src/img/sprite/svg/*.svg`,
    output: `docs/img/sprite/`,
    viewhtml: `docs/`,
    watch: [`src/img/sprite/svg/*.svg`],
  },
  static: {
    input: `src/static/**/*.*`,
    output: `docs/`,
  },
  NODE_ENV: process.env.NODE_ENV || 'development', // or production
  isProduction: this.NODE_ENV === 'production',
};
