var TestRun = require('../../common/models/test-run'),
    Test = require('../../common/models/test'),
    driver = require('./driver'),
    Promise = require('bluebird'),
    gm = require('gm');

function runTest() {
    var client = driver.getInstance();
    var page = client.url(this.test.spec.url),
        boundingRect;

    return page.execute(function(selector) {
            return document
                .querySelector(selector)
                .getBoundingClientRect();
        }, this.test.spec.selector)
        .then(function(scriptResponse) {
            boundingRect = scriptResponse.value;
            return page.saveScreenshot();
        })
        .then(function(screenshotResponse) {
            return new Promise(function(resolve) {
                gm(screenshotResponse)
                  .crop(
                      boundingRect.width,
                      boundingRect.height,
                      boundingRect.left,
                      boundingRect.top
                  )
                  .write('/Users/ben/Desktop/newoutput-chrome.png', resolve);

            });
        })
        .then(console.log);
}

function stripArray(response) {
    return response[0];
}

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
        })
        .then(stripArray)
        .then(runTest);
};
