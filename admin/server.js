var express = require('express'),
    exphbs  = require('express-handlebars'),
    app = express(),
    routes = require('./app/routes');
    hbs = require('hbs'),

app.engine('handlebars', exphbs({
        defaultLayout: 'main',
    })
);

app.set('view engine', 'handlebars');
var temp = __dirname + '/static';

hbs.registerPartials(__dirname + '/app/views/partials');
app.use('/static/', express.static(__dirname + '/static'));
routes(app);

app.listen(process.env.PORT || 8080);
