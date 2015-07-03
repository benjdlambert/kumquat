var mongoose = require('mongoose'),
    Promise = require('bluebird');

var Suite = require('../common/models/suite'),
    Test = require('../common/models/test'),
    TestRun = require('../common/models/test-run'),
    Spec = require('../common/models/spec');

(function() {
    'use strict';
    Promise.promisifyAll(mongoose);
    mongoose.connectAsync('mongodb://localhost/kumquat')
        .bind({})
        .then(function() {
            return Spec.createAsync({
                selector: 'div#some-component.hello',
                url: 'http://www.bbc.co.uk/sport/0/'
            });
        })
        .then(function(returnedSpec) {
            this.spec = returnedSpec;
            return TestRun.createAsync({
                start: new Date().getTime() - 1000,
                end: new Date().getTime(),
                success: true,
                percentage: 100
            });
        })
        .then(function(testRun) {
            return Test.createAsync({
                name: 'My first test',
                description: 'This is my first test.. I like tests',
                spec: this.spec,
                runs: [testRun]
            });
        })
        .then(function(returnedTest) {
            return Suite.createAsync({
                name: 'Suitest thing',
                tests: [returnedTest]
            });
        })
        .then(function() {
            return mongoose.disconnectAsync();
        });
})();
