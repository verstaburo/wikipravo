const gulp = require('gulp');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');
const gulpIf = require('gulp-if');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const cssimport = require('gulp-cssimport');
const sourcemaps = require('gulp-sourcemaps');
const bulkSass = require('gulp-sass-bulk-import');
const rename = require('gulp-rename');
const stylelint = require('stylelint');
const isDebug = process.env.NODE_ENV !== 'production';

/* eslint-disable global-require */
gulp.task('styles', () => {
  gulp.src('app/styles/*.scss')
  .pipe(plumber({ errorHandler: errorHandler('Error in styles task') }))
    .pipe(gulpIf(isDebug, sourcemaps.init()))
    .pipe(bulkSass())
    .pipe(sass())
    .pipe(postcss([
      require('autoprefixer'),
      require('postcss-autoreset')({
        reset: {
          'font-family': 'inherit',
          'font-size': 'inherit',
        },
      }),
      require('postcss-initial'),
      require('postcss-center'),
      require('postcss-clearfix'),
      require('postcss-discard-comments'),
      require('postcss-size'),
      require('css-mqpacker'),
    ]))
    .pipe(cssimport())
    .pipe(cssnano({ zIndex: false }))
    .pipe(gulpIf(isDebug, sourcemaps.write()))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/assets/styles'));

  gulp.start('styles:lint');
});

gulp.task('styles:lint', () => (
  gulp.src('app/**/*.scss')
    .pipe(postcss([
      stylelint(),
      require('postcss-reporter')({
        clearMessages: true,
      }),
    ], { syntax: require('postcss-scss') }))
));
/* eslint-enable global-require */
