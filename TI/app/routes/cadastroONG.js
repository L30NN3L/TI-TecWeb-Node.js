//var dbConnection = require('../../config/dbConnection');

module.exports = function(application){

	
    application.get('/cadastroONG', function(req, res) {
       

        res.render("cadastroONG");


        });
        

    application.post('/cadastrarONG/salvar', function(req,res) {

      //res.send(dados);

    let dados = req.body;

    // MODO JSON, ATIVAR!!!

    let pessoa = {

      cpf_pessoa  : dados.cpf_pessoa,
      nome_pessoa : dados.nome_pessoa,
      dataNascimento : '1994-08-12',
      profissao : dados.profissao,
      estadoCivil : dados.estadoCivil,
      sexo : 'M',
      senha : "teste"

    };

    let ong = {

      nomeFantasia  : dados.nomeFantasia,
      razaoSocial : dados.razaoSocial,
      cnpj : dados.cnpj,
      site : dados.site,
      dataFundacao : dados.dataFundacao,
      areaDeAtuacao : dados.areaDeAtuacao,
      cpfResponsavel : dados.cpf_pessoa //é isso mesmo!

    };

    let banco = {

      codigo_banco  : 12345, //dados.codigo_banco ,
      agencia :  54321, //dados.agencia ,
      conta :   2468,//dados.conta,// 
      nome :  'Conta do Varildo', //dados.nome,
      cod_ong : dados.cnpj // é isso mesmo!

    };

     let endereco = {

      tipo_de_endereco : 0,
      cidade  : dados.cidade,
      rua : dados.rua,
      bairro : dados.bairro,
      numero : dados.numero,
      uf : dados.uf, 
      complemento : dados.complemento,
      cep : dados.cep,
      end_fk_ref_ong : dados.cpnj,
      end_fk_ref_pessoa : "0"

    };

    let contato = {

      telefone1_contato  : dados.telefone1_contato,
      telefone2_contato : dados.telefone2_contato,
      email_contato : dados.email_contato,
      tipo_de_contato : 0,
      cont_fk_ref_ong : dados.cnpj, // é isso mesmo!
      cont_fk_ref_pessoa : "0"

    };

    
      let connection = application.config.dbConnection();
      

      let modeloPessoaDAO = application.app.models.modeloPessoaDAO;
      let modeloOngDAO = application.app.models.modeloOngDAO;
      let modeloBancoDAO = application.app.models.modeloBancoDAO;
      let modeloEnderecoDAO = application.app.models.modeloEnderecoDAO;
      let modeloContatoDAO = application.app.models.modeloContatoDAO;


      modeloPessoaDAO.inserirPessoa(pessoa, connection, 

            //CallBack
            function(error, results){     

              if(error){
                res.send("Deu pau véi! " + error);
              }

            //      res.redirect("/testeSelect");
             console.log("Inserção sucedida: ");
             console.log(pessoa);
          } //fim CallBack   

        );  //fim model


      modeloOngDAO.inserirONG(ong, connection, 

            //CallBack
            function(error, results){     

              if(error){
                res.send("Deu pau véi! " + error);
              }
            //      res.redirect("/testeSelect");
            console.log("Inserção sucedida: ");
            console.log(ong);

          } //fim CallBack   

        );  //fim model
      
      
      modeloBancoDAO.inserirBanco(banco, connection, 

            //CallBack
            function(error, results){     

              if(error){
                res.send("Deu pau véi! " + error);
              }

            //      res.redirect("/testeSelect");
            
            console.log("Inserção sucedida: ");
            console.log(banco);
          } //fim CallBack   

        );  //fim model


      modeloEnderecoDAO.inserirEndereco(endereco, connection, 

            //CallBack
            function(error, results){     

              if(error){
                res.send("Deu pau véi! " + error);
              }

            //      res.redirect("/testeSelect");
            
            console.log("Inserção sucedida: ");
            console.log(endereco);
          } //fim CallBack   

        );  //fim model

      modeloContatoDAO.inserirContato(contato, connection, 

            //CallBack
            function(error, results){     

              if(error){
                res.send("Deu pau véi! " + error);
              }

            //      res.redirect("/testeSelect");
            
            console.log("Inserção sucedida: ");
            console.log(contato);
          } //fim CallBack   

        );  //fim model


   }); //fim APP.POST

     

  



  }


