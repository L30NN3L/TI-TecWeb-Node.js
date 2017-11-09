var app = express();
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var port = 3000;
app.set('view engine', 'ejs'); //Configuando Engine HTML para EJS
app.set('views', './app/views'); //Onde renderizar

app.use(express.static('./app/public')); //acrescentando CSS, Jquery e itens estáticos como imagem
app.use(bodyParser.urlencoded({extended: true})); //para funcionar o Body-parser

consign()   //Inclusão de rotas e dbConnection ao aplicativo
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);

module.exports = app; //aplicativo montado estruturalmente para uso