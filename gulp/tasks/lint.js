'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

module.exports = gulp.task('lint', function() {
  return gulp.src([global.config.paths.src.scripts])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
