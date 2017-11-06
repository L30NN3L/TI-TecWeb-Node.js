var app = require('./config/server');
/*
var rotaIndex = require('./app/routes/index');
rotaIndex(app);
var rotaCadastroONG = require ('./app/routes/cadastroONG');
rotaCadastroONG(app);
var rotacadastroVoluntario = require('./app/routes/cadastrarvoluntario');
rotacadastroVoluntario(app);
var rotaLogin = require('./app/routes/login');
rotaLogin(app);
*/
app.listen(3000, function(){
	console.log("Servidor funfando");
});

