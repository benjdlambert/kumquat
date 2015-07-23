var mongoose = require('mongoose');

exports.setup = function() {
    return mongoose.connectAsync('mongodb://localhost/test-kumquat');
};

exports.teardown = function() {
    return mongoose.disconnectAsync();
};
