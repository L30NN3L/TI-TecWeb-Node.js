module.exports = function() {

	this.getBancos = function(connection,callback){

		connection.query('select * from Banco', callback); 

      	connection.end();

	}

	this.inserirBanco = function(dados_banco, connection, callback){

		connection.query('insert into Banco set ? ', dados_banco, callback);

	}

	return this;

}