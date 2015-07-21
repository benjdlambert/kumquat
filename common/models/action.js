var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    FlowStep = require('./flow-step');

var Action = FlowStep.extend({});

Promise.promisifyAll(Action);

module.exports = mongoose.model('Action', Action);
