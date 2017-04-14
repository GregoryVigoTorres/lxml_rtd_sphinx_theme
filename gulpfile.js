var gulp = require('gulp');
var bower = require('gulp-bower');
var sass = require('gulp-sass');

var dest = './lxml_rtd/build';
// relative to this file
var sassIncludePaths = [
  'bower_components/bourbon/dist',
  'bower_components/neat/app/assets/stylesheets',
  'bower_components/font-awesome/scss',
  'bower_components/wyrm/sass'
]


// build-deps, build or watch

gulp.task('default', function() {
  console.log('building!');
  return gulp.src('./lxml_rtd/sass/**/*.sass').pipe(
    sass({
      includePaths: sassIncludePaths,
      indentedSyntax: true,
      indentWidth: 2
    })
  ).on('error', sass.logError).pipe(
    gulp.dest('./lxml_rtd/build/static/css')
  );
});

// sass build, watch

// sass.includePaths = loadPath


gulp.task('build-deps', function() {
  return bower();
});
