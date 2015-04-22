'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

module.exports = gulp.task('minify',function() {
  return gulp.src(config.paths.dest.build.scripts + '/' + config.filenames.build.scripts)
    .pipe(uglify())
    .pipe(rename(config.filenames.buildMin.scripts))
    .pipe(gulp.dest(global.config.paths.dest.build.scripts))
});
