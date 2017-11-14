
module.exports = function(application){
	application.get('/cadastroVoluntario', function(req,res){
		res.render("cadastroVoluntario");
	});

	application.post('/cadastroVoluntario/salvar', function(req,res){
		
		
    
		var dados = req.body;

		//	res.send(dados);

		

	    //let chaveOng = dados.cnpj;

	    // MODO JSON, ATIVAR!!!

	    let pessoa = {

	      cpf_pessoa  : dados.cpf_pessoa,
	      nome_pessoa : dados.nome_pessoa,
	      dataNascimento : dados.dataNascimento,
	      profissao : dados.profissao,
	      estadoCivil : dados.estadoCivil,
	      sexo : dados.radioSexo,
	      senha : "teste"

	    };

	    let contato = {

	      telefone1_contato  : dados.telefone1_contato,
	      telefone2_contato : dados.telefone2_contato,
	      email_contato : dados.email_contato,
	      tipo_de_contato : 1,
	     // cont_fk_ref_ong : ong.cnpj // é isso mesmo!
	      cont_fk_ref_pessoa : pessoa.cpf_pessoa

   		};

   		let endereco = {

	      tipo_de_endereco : 1,
	      cidade  : dados.cidade,
	      rua : dados.logradouro,
	      bairro : dados.bairro,
	      numero : dados.numero,
	      uf : dados.estado, 
	      complemento : dados.complemento,
	      cep : dados.cep,
	    //  end_fk_ref_ong : ong.cnpj
	      end_fk_ref_pessoa : pessoa.cpf_pessoa

	    };

	    let voluntario = {

	     cpf_pessoa : pessoa.cpf_pessoa,
	     cnpj : '39264131' // Ong Without Creative

	    }





	    var connection = application.config.dbConnection();

	   	let modeloPessoaDAO = application.app.models.modeloPessoaDAO;
     	let modeloEnderecoDAO = application.app.models.modeloEnderecoDAO;
    	let modeloContatoDAO = application.app.models.modeloContatoDAO;
    	let modeloVoluntarioDAO = application.app.models.modeloVoluntarioDAO;


	     modeloPessoaDAO.inserirPessoa(pessoa, connection, 

            //CallBack
            function(error, results){     

              if(error){
                console.log("***********************");
                console.log("Falha inserção tabela pessoa!");
                console.log(error);
                console.log(pessoa);
                console.log("***********************");
                res.send("Deu pau véi! " + error);
                return;
              }

            //      res.redirect("/testeSelect");
             console.log("Inserção sucedida: ");
             console.log(pessoa);
          } //fim CallBack   

        );  //fim model

	      modeloContatoDAO.inserirContato(contato, connection, 

            //CallBack
            function(error, results){     

              if(error){
                console.log("***********************");
                console.log("Falha inserção tabela contato!");
                console.log(error);
                console.log(contato);
                console.log("***********************");
                res.send("Deu pau véi! " + error);
                return;
              }

            //      res.redirect("/testeSelect");
            
            console.log("Inserção sucedida: ");
            console.log(contato);
          } //fim CallBack   

        );  //fim model

	      modeloEnderecoDAO.inserirEndereco(endereco, connection, 

            //CallBack
            function(error, results){     

              if(error){
                console.log("***********************");
                console.log("Falha inserção tabela endereco!");
                console.log(error);
                console.log(endereco);    
                console.log("***********************");
                res.send("Deu pau véi! " + error);
                return;
              }

            //      res.redirect("/testeSelect");
            
            console.log("Inserção sucedida: ");
            console.log(endereco);
          } //fim CallBack   

        );  //fim model

	      modeloVoluntarioDAO.inserirVoluntario(voluntario, connection, 

            //CallBack
            function(error, results){     

              if(error){
                console.log("***********************");
                console.log("Falha inserção tabela voluntario!");
                console.log(error);
                console.log(voluntario);    
                console.log("***********************");
                res.send("Deu pau véi! " + error);
                return;
              }

            //      res.redirect("/testeSelect");
            
            console.log("Inserção sucedida: ");
            console.log(voluntario);
          } //fim CallBack   

        );  //fim model

	      res.redirect('/'); 

	})


};