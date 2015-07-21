var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    Schema = mongoose.Schema;

var Test = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    flow: [
        {
            type: Schema.Types.ObjectId,
            ref: 'FlowStep'
        }
    ]
});

Promise.promisifyAll(Test);

module.exports = mongoose.model('Test', Test);
