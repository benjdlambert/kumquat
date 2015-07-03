var TestRun = require('../../common/models/test-run'),
    Test = require('../../common/models/test');

exports.process = function(message) {
    'use strict';
    var id = message.id;

    return Test
        .findById(id)
        .populate('spec')
        .execAsync()
        .bind({})
        .then(function(test) {
            this.test = test;
            return TestRun.createAsync({
                start: new Date(),
                baseline: test.baseline
            });
        })
        .then(function(testRun) {
            this.testRun = testRun;
            this.test.runs.push(testRun);
            return this.test.saveAsync();
        });
};
