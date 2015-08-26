var express = require('express'),
    exphbs  = require('express-handlebars'),
    app = express(),
    routes = require('./app/routes'),
    hbs = require('hbs'),
	bodyParser = require('body-parser');

app.engine('handlebars', exphbs({
        defaultLayout: 'main',
    })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'handlebars');

hbs.registerPartials(__dirname + '/app/views/partials');
app.use('/static/', express.static(__dirname + '/static'));
routes(app);

app.listen(process.env.PORT || 8080);
