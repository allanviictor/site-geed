const gulp = require('gulp');
const { parallel } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');


function style() {
    return gulp.src('./src/sass/style.sass') // diretorio do arquivo
    .pipe(sass({ includePaths: ['./node_modules'] })) // plugin sass && caminho pra node_modules
    .pipe(gulp.dest('dist/')) // destination
    .pipe(browserSync.stream())
}


function js() {
    return gulp.src(['./src/js/vendor/jquery.js', './src/js/vendor/bootstrap.min.js', './src/js/vendor/Chart.min.js', './src/js/vendor/chartjs-plugin-labels.min.js', './src/js/app.js'])
    .pipe(concat('app.js')) 
    .pipe(gulp.dest('./dist')) 
    .pipe(browserSync.stream())
}


function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./src/sass/**/*.sass', style)
    gulp.watch('./src/js/app.js', js)
    gulp.watch('./*.html').on('change', browserSync.reload)
}


exports.style = style;
exports.watch = watch;
exports.build = parallel(style, js, watch);

