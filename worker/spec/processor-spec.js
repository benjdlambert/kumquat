describe('Processor', function() {
    'use strict';

    var messageRetriever,
        Promise = require('bluebird'),
        mongoose = require('mongoose'),
        processor,
        Spec = require('../../common/models/spec'),
        Test = require('../../common/models/test');

    beforeEach(function() {
        messageRetriever = require('../lib/message-retriever');
        processor = require('../lib/processor');

        Promise.promisifyAll(mongoose);
    });

    it('should create a test run for a message', function(done) {
        createTest()
            .tap(function(message){
                this.message = message
                spyOn(messageRetriever, 'getMessage').and.returnValue(
                    Promise.resolve({ id: message.id })
                );
            })
            .tap(function(message) {
                return processor.process(message);
            })
            .then(function() {
                return Test.findByIdAsync(this.message.id);
            })
            .then(function(returnedTest) {
                expect(returnedTest.runs.length).toBe(1);
                done();
            });
    });

    function createTest() {
        return mongoose.connectAsync('mongodb://localhost/kumquat')
            .bind({})
            .then(function() {
                return Spec.createAsync({
                    selector: 'div#some-component.hello',
                    url: 'http://www.bbc.co.uk/sport/0/'
                });
            })
            .then(function(returnedSpec) {
                return Test.createAsync({
                    name: 'My first test',
                    description: 'This is my first test.. I like tests',
                    spec: returnedSpec
                });
            });
    }
});
