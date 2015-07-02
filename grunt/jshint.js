module.exports = function(grunt) {
    grunt.config(
        'jshint',
        {
            options: {
                jshintrc: true
            },
            js: ['./admin/**/*.js', './worker/**/*.js']
        }
    );
};
