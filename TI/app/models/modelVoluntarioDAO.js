module.exports = function() {

	this.getVoluntarios = function(connection,callback){


		connection.query('select * from Voluntario', callback); 

      	connection.end();

	}

	this.inserirBanco = function(dados_voluntario, connection, callback){

		connection.query('insert into Voluntario set ? ', dados_voluntario, callback);

	}

	return this;

}