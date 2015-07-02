module.exports = function(grunt) {
    'use strict';
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
