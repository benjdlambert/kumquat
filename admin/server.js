var express = require('express'),
    exphbs  = require('express-handlebars'),
    app = express(),
    routes = require('./app/routes');

app.engine('handlebars', exphbs({
        defaultLayout: 'main',
    })
);

app.set('view engine', 'handlebars');

routes(app);

app.listen(process.env.PORT || 8080);
