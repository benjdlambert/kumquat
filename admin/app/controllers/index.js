var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    Schema = mongoose.Schema;

var Suite = require('../../../common/models/suite');

exports.action = function(request, response) {
    'use strict';
    var suites = [];

	Promise.promisifyAll(mongoose);
	mongoose.connectAsync('mongodb://localhost/kumquat')
	    .bind({})
	    .then(function() {
	    	return Suite.findAsync({});
	    })
	    .then(function(data) {
    		suites = data;
		})
	    .then(function() {
	        return mongoose.disconnectAsync();
	    })
	    .then(function() {
		    response.render('index', {suites: suites});
	    });
};
