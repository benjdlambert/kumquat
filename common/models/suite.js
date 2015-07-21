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
        }
    ]
});

Promise.promisifyAll(Suite);

exports.model = mongoose.model('Suite', Suite);
exports.raw = Suite;
