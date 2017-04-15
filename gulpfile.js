var gulp = require('gulp');
var bower = require('gulp-bower');
gulpIf = require('gulp-if');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// static root for source files
var staticRoot = './lxml_rtd_sphinx_theme/static/'
var dest = './lxml_rtd_sphinx_theme/';
var sassIncludePaths = [
  'bower_components/bourbon/dist',
  'bower_components/neat/app/assets/stylesheets',
  'bower_components/font-awesome/scss',
  'bower_components/wyrm/sass'
]

var sassSource = './lxml_rtd_sphinx_theme/sass/**/*.sass'
var sassDest = dest+'static/css'
var sassOpts = {
  includePaths: sassIncludePaths,
  indentedSyntax: true,
  indentWidth: 2
};

var fontsSource = [
  'bower_components/font-awesome/fonts/*',
  'bower_components/lato-googlefont/Lato-Regular.ttf',
  'bower_components/lato-googlefont/Lato-Italic.ttf',
  'bower_components/lato-googlefont/Lato-Bold.ttf',
  'bower_components/lato-googlefont/Lato-BoldItalic.ttf',
  'bower_components/robotoslab-googlefont/RobotoSlab-Bold.ttf',
  'bower_components/robotoslab-googlefont/RobotoSlab-Regular.ttf',
  'bower_components/inconsolata-googlefont/Inconsolata-Bold.ttf',
  'bower_components/inconsolata-googlefont/Inconsolata-Regular.ttf'
];

var jsSource = [
  staticRoot+'js/modernizr.min.js ',
  staticRoot+'js/theme.js'
];

gulp.task('default', ['copy-fonts', 'copy-js', 'sass'], function() {
  /* AKA build
   * This pre-processes everything that needs to be pre-processed
   * and copies static files to the build directory.
   */
  console.log('Copied fonts and javascript to '+dest);
});

gulp.task('copy-fonts', function() {
  return gulp.src(fontsSource).
    pipe(gulp.dest(dest+'static/fonts'));
});

gulp.task('copy-js', function() {
  return gulp.src(jsSource).
    pipe(uglify()).
    pipe(gulp.dest(dest+'static/js'));
});

gulp.task('sass', function() {
  return gulp.src(sassSource).
    pipe(sass(sassOpts)).
    on('error', sass.logError).
    pipe(gulp.dest(sassDest));
});

gulp.task('sass-watch', function() {
  console.log('Your SASS files are being watched...');
  gulp.watch(sassSource, ['sass']);
});

gulp.task('build-deps', function() {
  return bower();
});
