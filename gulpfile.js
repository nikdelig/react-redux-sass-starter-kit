var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var minifyCSS = require('gulp-csso');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', function() {
  return gulp.src('src/js/index.js')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('dist/'));
});

gulp.task('default', [ 'sass' ]);
