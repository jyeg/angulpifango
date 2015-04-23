'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

module.exports = gulp.task('release',function() {
  return gulp.src(config.paths.dest.build.scripts + '/' + config.filenames.build.scriptsMin)
    .pipe(gulp.dest(global.config.paths.dest.release.scripts))
});
