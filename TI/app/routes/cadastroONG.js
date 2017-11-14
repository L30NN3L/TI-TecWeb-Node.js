//var dbConnection = require('../../config/dbConnection');

module.exports = function(application){

	
    application.get('/cadastroONG', function(req, res) {
       

        res.render("cadastroONG", {validacao : {} , form : {} });


        });
        

    application.post('/cadastrarONG/salvar', function(req,res) {

      //res.send(dados);



    var dados = req.body;

    //  res.send(dados);

    req.assert('nomeFantasia','Nome Fantasia é obrigatório').notEmpty();
    req.assert('cnpj','CNPJ é obrigatório').notEmpty();
    req.assert('areaDeAtuacao','Área de Atuação é obrigatório').notEmpty();
    req.assert('cpf_pessoa','CPF do Responsável é obrigatório').notEmpty();
    req.assert('email','Email da ONG é obrigatório').notEmpty();
    req.assert('email_contato','Email do Responsável é obrigatório').notEmpty();
    
    var errosValidacao = req.validationErrors();

    if(errosValidacao){

      res.render("cadastroONG", {validacao : errosValidacao, form : dados });
      return;

    }

    //let chaveOng = dados.cnpj;

    // MODO JSON, ATIVAR!!!

    let pessoa = {

      cpf_pessoa  : dados.cpf_pessoa,
      nome_pessoa : dados.nome_pessoa,
      dataNascimento : '1994-08-12',
      profissao : dados.profissao,
      estadoCivil : dados.estadoCivil,
      sexo : dados.radioSexo,
      senha : "teste"

    };

    let ong = {

      nomeFantasia  : dados.nomeFantasia,
      razaoSocial : dados.razaoSocial,
      cnpj : dados.cnpj,
      site : dados.site,
      dataFundacao : dados.dataFundacao,
      areaDeAtuacao : dados.areaDeAtuacao,
      cpfResponsavel : pessoa.cpf_pessoa //é isso mesmo!

    };

    let banco = {

      codigo_banco  : Math.round(Math.random(1000000) * (Math.random(1000000) * 10) * 1000), //dados.codigo_banco ,
      agencia :  54321, //dados.agencia ,
      conta :   2468,//dados.conta,// 
      nome :  'Cliente', //dados.nome,
      cod_ong : ong.cpnj // é isso mesmo!

    };

     let endereco = {

      tipo_de_endereco : 0,
      cidade  : dados.cidade,
      rua : dados.logradouro,
      bairro : dados.bairro,
      numero : dados.numero,
      uf : dados.estado, 
      complemento : dados.complemento,
      cep : dados.cep,
      end_fk_ref_ong : ong.cnpj
     // end_fk_ref_pessoa : "0"

    };

    let contatoONG = {

      telefone1_contato  : dados.telefone1_contato,
      telefone2_contato : dados.telefone2_contato,
      email_contato : dados.email,
      tipo_de_contato : 0,
      cont_fk_ref_ong : ong.cnpj // é isso mesmo!
      //cont_fk_ref_pessoa : "0"

    };

    let contatoPessoa = {

      email_contato : dados.email_contato,
      tipo_de_contato : 1

    }

    
      var connection = application.config.dbConnection();
      


      let modeloPessoaDAO = application.app.models.modeloPessoaDAO;
      let modeloOngDAO = application.app.models.modeloOngDAO;
      let modeloBancoDAO = application.app.models.modeloBancoDAO;
      let modeloEnderecoDAO = application.app.models.modeloEnderecoDAO;
      let modeloContatoDAO = application.app.models.modeloContatoDAO;


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


      modeloOngDAO.inserirONG(ong, connection, 

            //CallBack
            function(error, results){     

              if(error){
                console.log("***********************");
                console.log("Falha inserção tabela ong!");
                console.log(error);
                console.log(ong);
                console.log("***********************");
                
                res.send("Deu pau véi! " + error);
                return;
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
                console.log("***********************");
                console.log("Falha inserção tabela banco!");
                console.log(error);
                console.log(banco);
                console.log("***********************");

                res.send("Deu pau véi! " + error);
                return;
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

      modeloContatoDAO.inserirContato(contatoONG, connection, 

            //CallBack
            function(error, results){     

              if(error){
                console.log("***********************");
                console.log("Falha inserção tabela contato!");
                console.log(error);
                console.log(contatoONG);
                console.log("***********************");
                res.send("Deu pau véi! " + error);
                return;
              }

            //      res.redirect("/testeSelect");
            
            console.log("Inserção sucedida: ");
            console.log(contatoONG);
          } //fim CallBack   

        );  //fim model

      modeloContatoDAO.inserirContato(contatoPessoa, connection, 

            //CallBack
            function(error, results){     

              if(error){
                console.log("***********************");
                console.log("Falha inserção tabela contato!");
                console.log(error);
                console.log(contatoONG);
                console.log("***********************");
                res.send("Deu pau véi! " + error);
                return;
              }

            //      res.redirect("/testeSelect");
            
            console.log("Inserção sucedida: ");
            console.log(contatoONG);
          } //fim CallBack   

        );  //fim model

      res.redirect('/'); 


   }); //fim APP.POST

     

  



  }


