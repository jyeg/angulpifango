'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

/* caches templates to partials.js */
module.exports = gulp.task('templates', function () {
  gulp.src([config.paths.src.templates])
   .pipe(templateCache('partials.js', {
      module: 'MyApp',
      moduleSystem: 'browserify'
    }))
   .pipe(gulp.dest(config.paths.src.templatesCompiled));
});
