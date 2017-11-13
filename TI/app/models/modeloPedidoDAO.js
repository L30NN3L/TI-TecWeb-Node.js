module.exports = function() {

	this.getPedidos = function(connection,callback){

		connection.query('select * from Pedido', callback); 

      	connection.end();

	}

	this.inserirBanco = function(pedido, connection, callback){

		connection.query('insert into Pedido set ? ', pedido, callback);

	}

	return this;

}