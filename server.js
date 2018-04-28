// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Create an instance of the express app.
var app = express();

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars as the default templating engine.
var express_handlebars = require('express-handlebars');
app.engine('handlebars', express_handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
var router = require('./controllers/burgers_controllers.js');
app.use('/', router);

// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

// Start our server
app.listen(port);