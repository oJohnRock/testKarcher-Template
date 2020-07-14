let gulp = require('gulp');
let sass = require('gulp-sass');
let plumber = require('gulp-plumber');
let autoprefixer = require('gulp-autoprefixer');
let browserSync = require('browser-sync').create();
let sourceMaps = require('gulp-sourcemaps');
let rename = require('gulp-rename');

gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('sass', function() {
  return gulp.src('scss/style.scss')
    .pipe(plumber())
    .pipe(sourceMaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions']
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch("*.html", gulp.series("html"));
  gulp.watch("scss/**/*.scss", gulp.series("sass"));
  gulp.watch("js/*.js", gulp.series("js"));
})