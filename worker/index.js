var messageRetriever = require('./lib/message-retriever'),
    processor = require('./lib/processor'),
    mongoose = require('bluebird').promisifyAll(require('mongoose'));

    require('../common/models/spec');

mongoose.connectAsync('mongodb://localhost/kumquat')
    .then(function() {
        return messageRetriever.getMessage();
    })
    .then(function(message){
        return processor.process(message);
    });
