var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    Schema = mongoose.Schema,
    ErrorController = require('./error');

exports.action = function(request, response) {
    'use strict';
    if (request.method === 'POST') {

    	var title = request.body.title,
    		descrption = request.body.description || '',
    		error = { code: 0 };

    	if (!title) {
    		error.code = 1;
    		error.message = "You must specify a suite name";
    	}

    	if (error.code > 0) {
    		return response.render('create-suite', { error : error });
    	}
    }
    return response.render('create-suite', {});
};
