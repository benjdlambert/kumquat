module.exports = function(grunt) {
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
