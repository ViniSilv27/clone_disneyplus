const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(cleanCss())
    .pipe(gulp.dest('./dist/css'));
}

exports.default = styles
exports.watch = function(){
    gulp.watch('src/styles/*.scss', gulp.series(styles))
}