module.exports = function() {

	this.getPessoas = function(connection,callback){

		connection.query('select * from Pessoa', callback); 

      	connection.end();

	}

	this.inserirPessoa = function(dados_pessoa, connection, callback){

		connection.query('insert into Pessoa set ? ', dados_pessoa, callback);

	}

	return this;

}