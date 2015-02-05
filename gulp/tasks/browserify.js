'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserifyShim = require('browserify-shim');

/* runs browserify and publishes to bundled.js */
module.exports = gulp.task('browserify', ['lint', 'templates'], function() {
    return browserify({
        entries: [global.config.paths.src.modules]
    })
      .transform(browserifyShim)
      .bundle()
      .pipe(source(global.config.filenames.build.scripts))
      .pipe(gulp.dest(config.paths.dest.release.scripts));
});
