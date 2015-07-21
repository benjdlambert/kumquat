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
        }

    }
});

Promise.promisifyAll(FlowStep);

var model = mongoose.model('FlowStep', FlowStep);

model.path('data.actionType').validate(function(value){
    return /click|scroll|resize|input|wait|visit/i.test(value);
});
model.path('data.assertionType').validate(function(value){
    return /screenshot/.test(value);
});

module.exports = model;
