let gulp            = require('gulp');
let sass            = require('gulp-sass');
let browserSync     = require('browser-sync');
let uglify          = require('gulp-uglify');
let concat          = require('gulp-concat');
let del             = require('del');
let autoprefixer    = require('gulp-autoprefixer');

gulp.task('clean', async function () {
    del.sync('dist')
});

gulp.task('scss', function (){
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer([
            'last 15 versions',
            '> 1%',
            'ie 8',
            'ie 7'
        ],
            { cascade: true }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('css', function () {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnific-popup/dist/magnific-popup.css'
    ])
        .pipe(concat('_libs.scss'))
        .pipe(gulp.dest('src/scss'))
        .pipe(browserSync.reload({stream: true}))

});

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function () {
    return gulp.src('src/js/*.js')
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('js', function () {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.reload({stream: true}))

});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
});

gulp.task('export', function () {
    let buildHtml = gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));

    let buildCss = gulp.src('src/css/**/*.css')
        .pipe(gulp.dest('dist/css'));

    let buildJs = gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'));

    let buildFonts = gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'));

    let buildImg = gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('dist/img'));

    let buildContImg = gulp.src('src/countries_images/**/*.*')
        .pipe(gulp.dest('dist/countries_images'))

});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('src/*.html', gulp.parallel('html'));
    gulp.watch('src/js/*.js', gulp.parallel('script'))
});

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'));