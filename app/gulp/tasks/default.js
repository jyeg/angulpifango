'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = gulp.task('default', function () {
    runSequence('clean', 
        [ 'index', 'styles', 'templates', 'assets', 'lint' ],
        [ 'watchify', 'watch', 'serve' ]);
});

