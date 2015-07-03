var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    Schema = mongoose.Schema;

var TestRun = new Schema({
    start: Date,
    end: Date,
    sucess: Boolean,
    baseline: {
        data: Buffer,
        contentType: String
    },
    test: {
        type: Schema.Types.ObjectId,
        ref: 'Test'
    },
    diff: {
        data: Buffer,
        contentType: String
    },
    percentage: Number
});

Promise.promisifyAll(TestRun);

module.exports = mongoose.model('TestRun', TestRun);
