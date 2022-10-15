const { src, dest } = require('gulp');
const todo = require('gulp-todo');
const config = require('./config');

const getTodoFromJs = () =>
  src(config.scripts.todo.input)
    .pipe(todo({ fileName: config.scripts.todo.name }))
    .pipe(dest(config.scripts.todo.output));

const getTodoFromStyles = () =>
  src(config.styles.todo.input)
    .pipe(todo({ fileName: config.styles.todo.name }))
    .pipe(dest(config.styles.todo.output));

const getTodoFromTwig = () =>
  src(config.pages.todo.input)
    .pipe(todo({ fileName: config.pages.todo.name }))
    .pipe(dest(config.pages.todo.output));

exports.todoScripts = getTodoFromJs;
exports.todoStyles = getTodoFromStyles;
exports.todoTwig = getTodoFromTwig;
