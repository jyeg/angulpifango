'use strict';

var gulp = require('gulp');
var header = require('gulp-header');
var templateCache = require('gulp-angular-templatecache');

/* caches templates to partials.js */
module.exports = gulp.task('templates', function () {
  gulp.src([config.paths.src.templates])
   .pipe(templateCache('partials.js', { standalone: true }))
   .pipe(header('module.exports = '))
   .pipe(gulp.dest(config.paths.src.templatesCompiled));
});
