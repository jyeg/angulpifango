'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = gulp.task('djangify', function () {
    runSequence(
        'clean', 
        [ 'index', 'styles', 'templates', 'assets', 'lint' ],
        'browserify',
        'minify'
    );
});

