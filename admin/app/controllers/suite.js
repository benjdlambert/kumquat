var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    Schema = mongoose.Schema,
    ErrorController = require('./error')

var Suite = require('../../../common/models/suite');

exports.action = function(request, response) {
    'use strict';
    var suiteId = request.params.id,
    	suite;

	Promise.promisifyAll(mongoose);
	mongoose.connectAsync('mongodb://localhost/kumquat')
	    .bind({})
	    .then(function() {
	    	var data;
	    	try {
	    		data = Suite.findByIdAsync(suiteId);
	    	} catch(e) {
	    		console.log(e)
	    	}
	    	return data;
	    })
	    .then(function(data) {
    		suite = data;
		})
	    .then(function() {
	        return mongoose.disconnectAsync();
	    })
	    .then(function() {
	    	if(suite.length !== 0) {
	    		return response.render('suite', {suite: suite});
	    	}
	    	ErrorController.action(request, response, {message: "That suite could not be found"});
	    });
};
