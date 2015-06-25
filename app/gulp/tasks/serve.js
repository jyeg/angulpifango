'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

/* servers for dev and build */
module.exports = gulp.task('serve', function () {
  return connect.server({
    root: global.BUILD_FOLDER,
    port: global.config.ports.staticServer,
    fallback: global.config.paths.dest.build.fallback
  });
});
