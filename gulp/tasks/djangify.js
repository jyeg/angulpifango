'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

module.exports = gulp.task('djangify', ['browserify'], function() {
  gulp.src('./src/js/bundled.js')
    .pipe(concat(global.config.filenames.build.scripts))
    .pipe(gulp.dest(global.config.paths.dest.build.scripts))
});
