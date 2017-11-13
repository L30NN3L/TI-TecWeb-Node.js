module.exports = function() {

	this.getContatos = function(connection,callback){

		connection.query('select * from Contato', callback); 

      	connection.end();

	}

	this.inserirContato = function(dados_contato, connection, callback){

		connection.query('insert into Contato set ? ', dados_contato, callback);

	}

	return this;

}