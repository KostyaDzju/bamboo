var gulp = require('gulp');
webserver = require('gulp-webserver');
cssmin = require('gulp-cssmin');
uglify = require('gulp-uglify');
concat = require('gulp-concat');
rename = require('gulp-rename');
clean = require('gulp-clean');

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            fallback: 'index.html'
        }));
});

gulp.task('scripts',['clean-scripts'], function() {
    gulp.src('app/**/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/dist/scripts/'))
 });

gulp.task('css', function () {
 gulp.src('bower_components/bootstrap/dist/css/bootstrap.css')
 .pipe(cssmin())
 .pipe(rename({suffix: '.min'}))
 .pipe(gulp.dest('app/dist/css/'));
 });

gulp.task('clean-scripts', function() {
    return gulp.src('app/dist/scripts/all.js')
        .pipe(clean());
});

gulp.task('default', function() {
    gulp.run('webserver', 'scripts', 'css')});
