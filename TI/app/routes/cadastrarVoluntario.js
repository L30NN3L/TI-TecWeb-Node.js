var dbConnection = require('../../config/dbConnection');
var requestSql = dbConnection.request();

module.exports = function(app){
	app.get('/cadastroVoluntario', function(req,res){
		res.render("cadastroVoluntario");
	});

	app.post('/cadastrarvoluntario/salvar', function(req,res){
		//res.send("Esta funcionado!");

		console.log("Cadastro voluntario");
		console.log(req.body);
		//res.send(req.body);



 
		var cod_ong = requestSql.query("select cod_ong from ong where cnpj == '${req.body.cnpj}'");
		var nome = req.body.nomeVoluntario;
		var cpf = req.body.cpf;
		var telefone = req.body.telefone1;
		var celular = req.body.telefone2;
		var email = req.body.email;
		var rua = req.body.logradouro;
		var bairro = req.body.bairro;
		var numero = req.body.numero;
		var cod_pessoa = requestSql.query("select cod_pessoa from ong where cpf == '${req.body.cpf}'");

		requestSql.query("insert into pessoa(cod_pessoa, nome_pessoa, cpf_pessoa) values('${cpf}','${nome}','${cpf}')");
		requestSql.query("insert into voluntario(cod_pessoa,cod_ong) values ('${cod_pessoa}','${cod_ong}')");
		
		//requestSql.query("insert into telefone(cod_pessoa,telefone_contato,telefone2_contato,email_contato,tipo_de_contato) values('${cod_pessoa}','${telefone}','${celular}','${email}','1')");
		//requestSql.query("insert into telefone(cod_pessoa,rua,bairro,numero,tipo_de_endereco) values('${cod_pessoa}','${rua}','${bairro}','${numero}','1')");
	
	})


};