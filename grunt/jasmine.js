module.exports = function(grunt) {
    'use strict';
    grunt.config(
        'jasmine',
        {
            admin: {
                spec_dir: 'admin/spec'
            },
            worker: {
                spec_dir: 'worker/spec'
            }
        }
    );
};
