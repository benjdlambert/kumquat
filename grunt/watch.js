module.exports = function(grunt) {
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
