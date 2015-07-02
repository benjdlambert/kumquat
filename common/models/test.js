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
    spec: {
        type: Schema.Types.ObjectId,
        ref: 'Spec'
    },
    baseline: {
        data: Buffer,
        contentType: String
    }
});

Promise.promisifyAll(Test);

module.exports = mongoose.model('Test', Test);
