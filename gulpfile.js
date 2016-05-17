var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    webserver = require('gulp-webserver');

gulp.task('minifyCss', function() {
    gulp.src('dev/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      fallback: 'index.html'
    }));
});


gulp.task('watch', function(){
    gulp.watch('dev/css/*.css', ['minifyCss']);
});


gulp.task('default', ['minifyCss', 'webserver', 'watch']);