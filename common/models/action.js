var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    FlowStep = require('./flow-step');

require('extend');

var Action = new FlowStep.extend({});

Promise.promisifyAll(Action);

module.exports = mongoose.model('Action', Action);
