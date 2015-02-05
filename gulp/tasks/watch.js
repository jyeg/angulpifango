'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');

/* standard gulp tasks */
module.exports = gulp.task('watch', function() {
    gulp.watch([config.paths.src.scripts], ["watchify"]);
    gulp.watch([config.paths.src.templates], ["templates"]);
    gulp.watch([config.paths.src.stylesGlob], ["styles"]);
});
