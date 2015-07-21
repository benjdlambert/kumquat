var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    Schema = mongoose.Schema;

var FlowStep = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

Promise.promisifyAll(FlowStep);

module.exports = mongoose.model('FlowStep', FlowStep);
