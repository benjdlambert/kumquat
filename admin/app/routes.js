module.exports = function(app) {
    'use strict';
    app.get('/', require('./controllers/index').action);
    app.get('/create-suite', require('./controllers/create-suite').action);
    app.get('/suite/:id', require('./controllers/suite').action);
    app.get('/error', require('./controllers/suite').action);

    app.post('/create-suite', require('./controllers/create-suite').post);
};
