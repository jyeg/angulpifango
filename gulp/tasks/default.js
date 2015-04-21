'use strict';

var gulp = require('gulp');

gulp.task('default',
  [ 'index', 'styles', 'templates', 'assets', 'lint', 'watchify', 'watch', 'connect:dev' ]
);
