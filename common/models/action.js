var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    FlowStep = require('./flow-step');

var Action = FlowStep.extend({});
Promise.promisifyAll(Action);

exports.model = mongoose.model('Action', Action)
exports.raw = Action;
