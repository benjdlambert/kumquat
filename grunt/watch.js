module.exports = function(grunt) {
    'use strict';
    grunt.config(
        'watch',
        {
            unit: {
                files: ['./admin/**/*.js', './worker/**/*.js'],
                tasks: ['test']
            }
        }
    );
};
