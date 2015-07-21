var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    Schema = mongoose.Schema;

require('mongoose-schema-extend');

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
exports.model = mongoose.model('FlowStep', FlowStep)
exports.raw = FlowStep;
