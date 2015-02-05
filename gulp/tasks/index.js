'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var replace = require('gulp-replace');
var minifyHTML = require('gulp-minify-html');

module.exports = gulp.task('index', function () {
  return gulp.src(config.paths.src.index)
    .pipe(minifyHTML({comments: true, empty: true, spare: true, quotes: true}))
    .pipe(replace('<!--styles-->', '<link href="' + config.filenames.build.styles + '" rel="stylesheet">'))
    .pipe(replace('<!--scripts-->', '<script src="' + config.filenames.build.scripts + '"></script>'))
    .pipe(gulp.dest(config.paths.dest.build.index));
  });
