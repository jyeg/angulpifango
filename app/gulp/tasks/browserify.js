'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserifyShim = require('browserify-shim');
var ngAnnotate = require('gulp-ng-annotate');

module.exports = gulp.task('browserify', function() {
    return browserify({
        entries: [global.config.paths.src.modules]
    })
      .transform(browserifyShim)
      .bundle()
      .pipe(source(global.config.filenames.build.scripts))
      .pipe(ngAnnotate())
      .pipe(gulp.dest(config.paths.dest.build.scripts));
});
