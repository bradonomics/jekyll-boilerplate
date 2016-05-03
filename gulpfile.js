var gulp        = require('gulp');
var shell       = require('gulp-shell');
var browserSync = require('browser-sync').create();


//* Run Jekyll build command
gulp.task('build', shell.task(['jekyll build --config _config-dev.yml --watch']));


//* Serve with browserSync
gulp.task('serve', function () {
    browserSync.init({
      server: {
        baseDir: '_site/'
      },
    browser: 'firefox'
    });
    //* Reload page when the site rebuilds.
    gulp.watch('_site/**/*.*').on('change', reload);
});


//* Default task
gulp.task('default', ['build', 'serve']);
