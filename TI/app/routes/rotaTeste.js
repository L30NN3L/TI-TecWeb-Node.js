module.exports = function(application) {


	application.get('/testeSelect',function(req,res){
   
   
   var connection = application.config.dbConnection();
   var modelTesteDAO = new application.app.models.modelTesteDAO(connection);
   
   modelTesteDAO.getTeste( 

            //CallBack
            function(error, results){     
      
              if(error){
                console.log("Deu pau!");
                console.log(error);
                return;
              }

            console.log(results);

            var vetor = { testeSelect : results };

            res.render("testeSelect", {testeSelect : results});
            
        });

    
}); 


}