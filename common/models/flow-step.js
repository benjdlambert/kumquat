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
mongoose.model('FlowStep', FlowStep)
module.exports = FlowStep;
