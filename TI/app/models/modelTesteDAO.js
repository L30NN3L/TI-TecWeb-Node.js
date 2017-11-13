function Teste(connection){

	this._connection = connection;

}

Teste.prototype.getTeste = function(callback){

		this._connection.query('select * from teste', callback); 

      	this._connection.end();

	}

Teste.prototype.inserirTeste = function(dados, callback){

		this._connection.query('insert into teste set ? ', dados, callback);

		this._connection.end();

	}


module.exports = function() {

	return Teste;

}