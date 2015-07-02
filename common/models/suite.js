var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    Schema = mongoose.Schema;

var Suite = new Schema({
    name: {
        type: String,
        required: true
    },
    tests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Test'
        }
    ]
});

Promise.promisifyAll(Suite);

module.exports = mongoose.model('Suite', Suite);
