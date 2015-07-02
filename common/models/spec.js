var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    Schema = mongoose.Schema;

var Spec = new Schema({
    selector: {
        type: String
    },
    url: {
        type: String
    }
});

Promise.promisifyAll(Spec);

module.exports = mongoose.model('Spec', Spec);
