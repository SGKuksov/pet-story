const del = require('del');
const config = require('./config');

const clean = () => del(config.output);

exports.clean = clean;
