module.exports = function(grunt) {
    grunt.config(
        'jshint',
        {
            options: {
                jshintrc: true
            },
            js: ['./spec/*.js']
        }
    );
};
