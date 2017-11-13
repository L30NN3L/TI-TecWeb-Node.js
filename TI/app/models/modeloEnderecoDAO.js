module.exports = function() {

	this.getEnderecos = function(connection,callback){

		connection.query('select * from Endereco', callback); 

      	connection.end();

	}

	this.inserirEndereco = function(dados_endereco, connection, callback){

		connection.query('insert into Endereco set ? ', dados_endereco, callback);

	}

	return this;

}