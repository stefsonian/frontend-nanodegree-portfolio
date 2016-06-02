var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    imageResize = require('gulp-image-resize'),
    webserver = require('gulp-webserver');


gulp.task('minifyCss', function() {
    gulp.src('dev/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('resizeImagesXLarge', function () {
    gulp.src('dev/images/sunset.jpg')
        .pipe(imageResize({
            width: 2400
        }))
        .pipe(rename(function(path) {path.basename += "-xlarge";}))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('resizeImagesLarge', function () {
    gulp.src('dev/images/sunset.jpg')
        .pipe(imageResize({
            width: 1200
        }))
        .pipe(rename(function(path) {path.basename += "-large";}))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('resizeImagesMedium', function () {
    gulp.src('dev/images/*.jpg')
        .pipe(imageResize({
            width: 768
        }))
        .pipe(rename(function(path) {path.basename += "-medium";}))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('resizeImagesSmall', function () {
    gulp.src('dev/images/*.jpg')
        .pipe(imageResize({
            width: 480
        }))
        .pipe(rename(function(path) {path.basename += "-small";}))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('transferCss', function() {
    gulp.src('css/styles.css')
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('transferSvg', function() {
    gulp.src('dev/images/cape.svg')
        .pipe(gulp.dest('dist/images/'))
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


gulp.task('default', ['transferCss', 'transferSvg', 'webserver', 'watch']);