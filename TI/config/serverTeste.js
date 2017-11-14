var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
	.include('app/routes')
	.then('config/dbConnection.js') //deixe .then(config) e salva, roda e veja um loop loco, nem eu vi ainda, não recomendo
	.then('app/models')
	.into(app);


app.use(express.static('./app/views'));

module.exports = app;