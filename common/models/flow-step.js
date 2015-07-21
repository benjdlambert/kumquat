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
    },
    type: {
        type: String,
        required: true
    },
    data: {
        type: Schema.Types.Mixed,
        required: true
    }
});

Promise.promisifyAll(FlowStep);

module.exports = mongoose.model('FlowStep', FlowStep)
