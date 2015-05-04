var gulp    = require('gulp');
var shell = require('gulp-shell');

gulp.task('test', function () {
 
});

/**gulp.task('default', function() {
  gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});
**/

gulp.task('open',function(){
  gulp.src([])
    .pipe(shell('view https://github.com/crguezl/clase-express-coffee'))
});
