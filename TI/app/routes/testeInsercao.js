module.exports = function(application) {

	application.get('/testeInsercao', function(req,res) {

		res.render("insercaoTeste");

	});

	application.post('/teste/salvar', function(req,res) {

		var dados = req.body;

		var connection = application.config.dbConnection();
   		var modeloTesteDAO = application.app.models.modelTesteDAO;
   
 		  modeloTesteDAO.inserirTeste(dados, connection, 

            //CallBack
            function(error, results){     

            res.redirect("/testeSelect");
            
        	} //fim CallBack   

        );  //fim model


	});

}