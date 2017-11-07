function TesteDAO(connection){

	//var instanceConn = app.config.dbConnection.instance_conn();
	console.log("========================================================================================================");
	console.log("VIEW CONNECTION");

	console.log(connection)

	this._conn = connection.conn;
	this._req = connection.request;


}

TesteDAO.prototype.getTeste = function(){


	console.log("========================================================================================================");
	console.log("VIEW _CONN");
	console.log(this._conn);
	console.log("========================================================================================================");
	console.log("VIEW _REQ");
	console.log(this._req);

	this._conn.connect(function(err) {

		if(err){
			console.log("DEU PAU NA CONEXÃO!");
			console.log(err);
			return;
		}
		else {

			//console.log(this._req);
			this._req.query("SELECT * FROM dbo.TESTE", function(err, recordset){

				if(err){
					console.log("DEU PAU NA REQUISIÇÃO!");
					console.log(err);
					return;

				}
				else {

			//		console.log(_req);
					console.log(recordset);

				}

			//	console.log(_conn);
				this._conn.close();
				console.log("CONEXÃO FECHADA");
				//console.log(this._conn);

			})

		}



	})


}

module.exports = function() {

	return TesteDAO;

}

