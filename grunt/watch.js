module.exports = function(grunt) {
    grunt.config(
        'watch',
        {
            unit: {
                files: ['./**/*.js'],
                tasks: ['test']
            }
        }
    );
};
