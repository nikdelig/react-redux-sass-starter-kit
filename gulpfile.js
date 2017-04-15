var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var minifyCSS = require('gulp-csso');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');

gulp.task('clean', function() {
    return gulp.src('dist')
    .pipe(clean());
});

gulp.task('sass', ['clean'], function () {
    return gulp.src('./src/sass/**/*.sass')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('images', ['clean'], function() {
    gulp.src('src/media/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/media'))
});

gulp.task('default', ['clean'], function() {
    return gulp.src('src/js/index.js')
      .pipe(webpack( require('./webpack.config.js') ))
      .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['sass', 'images']);
