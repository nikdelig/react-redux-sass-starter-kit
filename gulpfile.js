const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const named = require('vinyl-named');
const watch = require('gulp-watch');

// Dist folder cleanup
gulp.task('clean', () => {
    gulp.src('dist')
    .pipe(clean());
});

// Sass files
gulp.task('sass', () => {
    gulp.src('./src/sass/**/*.sass')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(csso({
          restructure: false,
          sourceMap: true,
          debug: true,
      }))
      .pipe(gulp.dest('./dist/css'));
});

// Images minify
gulp.task('images', () => {
    gulp.src('src/media/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/media'));
});


gulp.task('webpack', () => {
    gulp.src('./src/js/index.js')
        .pipe(webpackStream(require('./webpack.config'), webpack))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['clean'], () => {
    watch(['./app/**/*.js', './test/*.js'], () => {
        gulp.src(['./src/js/**/*.js', './test/posts.js'])
          .pipe(named())
          .pipe(webpack(require('./webpack.config.js')))
          .pipe(gulp.dest('./dist'));
    });
});

gulp.task('watch', () => {
    gulp.watch('./src/sass/*.sass', ['sass']);
    gulp.watch('./src/js/**/*.js', ['webpack']);
});

gulp.task('default', ['webpack', 'sass', 'images', 'watch']);
