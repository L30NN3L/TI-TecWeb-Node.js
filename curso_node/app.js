var app = require('./config/server');

//var rotaNoticias = require('./app/routes/noticias')(app);
//rotaNoticias(app);

//var rotaHome = require('./app/routes/home')(app);
//rotaHome(app);

//var rotaInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
//rotaInclusaoNoticia(app);



app.listen(3000, function() {
	console.log("Servidor ON");

	console.log(app);
})
