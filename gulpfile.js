const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const webpack = require('webpack');
var webpackStream = require('webpack-stream');
const autoprefixer = require('gulp-autoprefixer');

// Sass files
gulp.task('sass', () => {
    gulp.src('./src/sass/app.sass')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(csso({
          restructure: false,
          sourceMap: true,
          debug: true
      }))
      .pipe(clean('./dist'))
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('dist/'));
});

// Images minify
gulp.task('images', () => {
    gulp.src('src/media/*')
    .pipe(imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({ plugins: [{ removeViewBox: true }]
        })
    ], {
        verbose: false
    }))
    .pipe(clean('./dist/media'))
    .pipe(gulp.dest('dist/media'));
});

// Watch task
gulp.task('watch', () => {
    gulp.watch('./src/sass/*.sass', ['sass']);
    gulp.watch('./src/js/*.js', ['webpack']);
});

// Server task
gulp.task('server', () => {
    require('./server'); // eslint-disable-line global-require
});

// Webpack task
gulp.task('webpack', () => {
    gulp.src('src/js/index.js')
    .pipe(webpackStream(require('./webpack.config.js'), webpack))// eslint-disable-line global-require
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['sass', 'images', 'webpack', 'server', 'watch']);
