var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

	var requestSql = dbConnection.request;
    console.log (requestSql);
    
    app.get('/cadastroONG', function(req, res) {
        //res.render(connection);
        var requestSql = dbConnection.request();
        console.log (requestSql);
        requestSql.query('select * from ONG', function(error, result) {
            res.render("cadastroONG", result);
            console.log('Result:', result);
        });
        
    });

    //variavel tipo contato e tipo endereço é para definir se é uma ong ou pessoa, as informações. 1 = pessoa e 2 = ong


    app.post('/cadastroONG/salvar', function(req, res){
        console.log("Cadastro ONG");

        console.log(req.body);
        res.send(req.body);

        var requestSql = dbConnection.request();


        var nomeOng = req.body.nome;
        var cnpj = req.body.cnpj;
        var nomeResponsavel = req.body.nomeResponsavel;
        var cpfResponsavel = req.body.cpfResponsavel;
        var telefone = req.body.telefone;
        var celular = req.body.celular;
        var email = req.body.email;
        var site = req.body.site;
        var rua = req.body.rua;
        var bairro = req.body.bairro;
        var numero = req.body.numero;
        var cod_area = req.body.area;

       // requestSql.query("insert into Pessoa(nome_pessoa,cpf_pessoa) values('${nomeResponsavel}','${cpfResponsavel}')");
     //   var cod_responsavel = requestSql.query("select cod_pessoa from Pessoa where cpf_pessoa == '${cpfResponsavel}'");
        requestSql.query("insert into ONG(nome_ong,cnpj,cod_responsavel,cod_area,site_ong) values ('${nomeOng}','${cnpj}','${cpfResponsavel}','${cod_area}','${site}')");
    //    var cod_ong = requestSql.query("select cod_ong from ong where cnpj == '${req.body.cnpj}'");
     //   requestSql.query("insert into telefone(cod_pessoa,telefone1_contato,telefone2_contato,email_contato,tipo_de_contato) values('${cod_ong}','${telefone}','${celular}','${email}','2')");
     //   requestSql.query("insert into endereco(cod_pessoa,rua,bairro,numero,tipo_de_endereco) values('${cod_ong}','${rua}','${bairro}','${numero}','2')");
    })


    /*

USE [DB_ONG-project]
GO

INSERT INTO [dbo].[Pessoa]
           ([nome_pessoa]
           ,[cpf_pessoa])
     VALUES
           (<nome_pessoa, varchar(40),>
           ,<cpf_pessoa, varchar(11),>)
GO




        execSQLQuery(`INSERT INTO Clientes(ID, Nome, CPF) VALUES(${id},'${nome}','${cpf}')`, res);
INSERT INTO [dbo].[ONG]
           ([nome_ong]
           ,[cnpj]
           ,[cod_responsavel]
           ,[cod_area]
           ,[site_ong])
     VALUES
           (<nome_ong, varchar(50),>
           ,<cnpj, varchar(14),>
           ,<cod_responsavel, int,>
           ,<cod_area, int,>
           ,<site_ong, varchar(50),>)
GO




    app.post('/cadastrarongs', function(req, res){
    	const id = parseInt(req.body.id);
        const nome = req.body.nomeFantasia.subString(0,100);
        const cpf = req.body.cnpj.subString(0,100);
        requestSql.query('insert into clientes(id, nome, cpf) values (${id},'${nome}','${cpf}')',res);
    });*/
};