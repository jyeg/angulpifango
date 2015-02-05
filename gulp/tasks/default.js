'use strict';

var gulp = require('gulp');

gulp.task('default',
  [ 'index', 'styles', 'templates', 'lint', 'watchify', 'watch', 'connect:dev' ]
);
