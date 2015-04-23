'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = gulp.task('styles', function () {
  return gulp.src(config.paths.src.styles)
    .pipe(sass(/*{sourcemap: true, sourcemapPath: '../src/styles'}*/).on('error', handleError))
    .pipe(autoprefixer('last 1 version'))
    .pipe(rename(config.filenames.build.styles))
    .pipe(gulp.dest(config.paths.dest.build.styles));
});
