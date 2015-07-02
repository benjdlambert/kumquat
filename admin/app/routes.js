module.exports = function(app) {
    'use strict';
    app.get('/', require('./controllers/index').action);
};
