 describe('Processor', function() {

    var Promise = require('bluebird'),
        mongoose = require('mongoose'),
        mockModelHelper = require('./mock-model-helper'),
        mongod = require('./mongo-helper'),
        testManager = require('./test-suites/test-manager'),
        processor = require('../lib/processor');
        Test = require('../../common/models/test');

    beforeEach(function(done) {
        Promise.promisifyAll(mongoose);
        mongod.setup()
            .then(done);
    });

    afterEach(function(done) {
        mongod.teardown()
            .then(done)
    })

    xit('should create a baseline for a test if it does not exist already', function(done) {
        Promise
            .all([
                mockModelHelper.createVistFlowStep('same'),
                mockModelHelper.createScreenshotAssertion()
            ])
            .then(mockModelHelper.createTestWithFlow)
            .then(function(test) {
                this.testId = test.id;
                return processor.process(this.id);
            })
            .then(function() {
                done();
            });
    });

    it('should create a test run for a message');
    it('should fail if sites are different');
    it('should not fail if two sites are not different');
    it('should compare components and fail if different');
    it('should compare components and not fail if not different');
});
