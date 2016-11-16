var gulp = require('gulp');
var _    = require('lodash');
var nodemon = require('gulp-nodemon');

// load mozaïk module tasks
_.forOwn(require('mozaik/gulpfile').tasks, function (task) {
    gulp.task(task.name, task.dep, task.fn);
});

gulp.task('dev', function () {
    nodemon({
        script: 'app.js'
        , tasks: ['build']
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
        , ignore: ['build/*']
    })
});