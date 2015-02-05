'use strict';

var gulp = require('gulp');
var del = require('del');

module.exports = gulp.task('clean', function(cb) {
  del([global.BUILD_FOLDER], cb);
});
