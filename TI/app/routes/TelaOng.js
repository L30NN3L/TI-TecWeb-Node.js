module.exports = function(application){
	
	application.get('/listaOngs',function(req,res){
		

		var connection = application.config.dbConnection();
    	var modeloOngDAO = application.app.models.modeloOngDAO();
   
   		modeloOngDAO.getOngs(connection, 

            //CallBack
            function(error, results){     
      
              if(error){
                console.log("Deu pau!");
                console.log(error);
                return;
              }

            console.log(results);

            var vetor = { ongs : results };

            res.render("TelaOng", { ongs : results });
            
        });



	});

	


};