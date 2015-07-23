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
    },
    type: {
        type: String,
        required: true
    },
    data: {
        actionType: {
            type: String
        },
        assertionType: {
            type: String
        },
        selector: {
            type: String
        },
        timeout: {
            type: Number
        },
        x: {
            type: Number
        },
        y: {
            type: Number
        },
        url: {
            type: String
        }
    }
});

Promise.promisifyAll(FlowStep);

FlowStep.path('data.actionType').validate(function(value){
    return /click|scroll|resize|input|wait|visit/i.test(value);
});
FlowStep.path('data.assertionType').validate(function(value){
    return /screenshot/.test(value) || value === undefined;
});

module.exports = mongoose.model('FlowStep', FlowStep);
