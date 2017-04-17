var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var named = require('vinyl-named');
var watch = require('gulp-watch');

// Dist folder cleanup
gulp.task('clean', function() {
    return gulp.src('dist')
    .pipe(clean());
});

// Sass files
gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.sass')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('./dist/css'));
});

// Images minify
gulp.task('images', function() {
    gulp.src('src/media/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/media'))
});


gulp.task('webpack', function() {
    return gulp.src('./src/js/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['clean'], function() {
    watch(['./app/**/*.js', './test/*.js'], function() {
        return gulp.src(['./src/js/**/*.js', './test/posts.js'])
          .pipe(named())
          .pipe(webpack(require('./webpack.config.js')))
          .pipe(gulp.dest('./dist'));
    });
});

gulp.task('watch', function() {
    gulp.watch('./src/sass/*.sass', ['sass']);
    gulp.watch('./src/js/**/*.js', ['webpack']);
});

gulp.task('default', ['webpack' ,'sass', 'images', 'watch']);
