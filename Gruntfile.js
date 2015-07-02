module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.registerTask('test', ['jasmine', 'jshint']);

    grunt.loadTasks('grunt');
};
