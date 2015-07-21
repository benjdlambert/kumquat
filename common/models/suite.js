var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    Schema = mongoose.Schema;

var Suite = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    runs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Run'
        }
    ],
    tests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Test',
            required: true
        }
    ]
});

Promise.promisifyAll(Suite);

module.exports = mongoose.model('Suite', Suite);
