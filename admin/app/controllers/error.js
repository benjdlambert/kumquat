var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    Schema = mongoose.Schema;

var Suite = require('../../../common/models/suite');

exports.action = function(request, response, error) {
    'use strict';
	return response.render('error', {error: error});
};
