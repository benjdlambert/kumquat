describe('Processor', function() {
    'use strict';

    var messageRetriever,
        Promise = require('bluebird'),
        mongoose = require('mongoose'),
        processor;

    beforeEach(function() {
        messageRetriever = require('../lib/message-retriever');
        processor = require('../lib/processor');

        Promise.promisifyAll(mongoose);
    });

    it('should create a test run for a message');
    it('should fail if sites are different');
    it('should not fail if two sites are not different');
    it('should compare components and fail if different');
    it('should compare components and not fail if not different');

});
