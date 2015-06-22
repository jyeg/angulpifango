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
	return sass(config.paths.src.styles) 
	.on('error', function (err) {
		console.error('Error!', err.message);
	})
	.pipe(autoprefixer('last 1 version'))
	.pipe(rename(config.filenames.build.styles))
	.pipe(gulp.dest(config.paths.dest.build.styles));
});
