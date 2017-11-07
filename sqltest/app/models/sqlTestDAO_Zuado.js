function sqlTestDAO(inst_conn) {

	console.log("\n\nCONTRUTOR SQLTESTDAO\n\n");

	console.log("+++++++++++++++++++++++++VIEW INTERNO+++++++++++++++++++++");
 	console.log("??? INTANCIA: " + inst_conn);

 	console.log("\nDESCRIÇÃO:\n");
 	console.log(inst_conn);
 	console.log("\n\n");

	this._connection = inst_conn.conn;
	this._Request = inst_conn.ClassRequest;

	console.log("this._Request:");
	console.log(this._Request);

	console.log("\n\nTENTATIVA DE CHAMAR _REQUEST\n\n");

	// console.log(this._Request()); FALHA
	console.log(new this._Request);

	console.log("\n\nTESTA REQUISIÇÃO\n\n");

	var teste_R = new this._Request(
          "SELECT * FROM dbo.TESTE",
             function(err, rowCount, rows) 
                {
                    console.log(rowCount + ' row(s) returned');
                    process.exit();
                }
            );

	console.log(teste_R);

	console.log("\n\n+++++++++++++++++++++++++VIEW INTERNO+++++++++++++++++++++\n\n");
}


sqlTestDAO.prototype.getTeste = function() {

// Attempt to connect and execute queries if connection goes through

console.log("\n\n\n****************************** CHAMADA GETTESTE ***********************************\n\n\n");


console.log("ANALISANDO this._connection:\n\n");

console.log(this._connection);

console.log("\n\nANALISANDO this._Request");

console.log(this._Request);

console.log("\n\nANALISANDO new this._Request");

console.log(new this._Request);

console.log("\n\n\n\n");

console.log("\n\n----------------------------------------------EXEC CONSULTA---------------------------------------------------\n\n");


this._connection.on('connect', function(err) 
   {
     if (err) 
       {
          console.log(err)
       }
    else
       {
          queryDatabase(this._Request,this._connection)
        //  console.log("What??? " + this._Request.Requet + " WHATAFUCK??? ");
       }
   }
 );

function queryDatabase(_Request,_connection)
   { console.log('Reading rows from the Table...');


   		console.log("PASSOU OS PARÂMETROS...");

   		console.log("\n\n");

   		console.log("_Request");
   		console.log(_Request);

   		console.log("\n\n");

   		console.log("_connection");
   		console.log(_connection);

   		console.log("\n\n");

   		console.log("O.O");
	   	
	   	/*


	   	DEIXE AQUI UMA SOLUÇÃO PARA ESTE PROBLEMA :P
		DEIXE SEU CODINOME TAMBÉM
		E DEIXAREI REGISTRADO PARA SEMPRE :P

	   	*/



       // Read all rows from table
     var request = new _Request(
          "SELECT * FROM dbo.TESTE",
             function(err, rowCount, rows) 
                {
                    console.log(rowCount + ' row(s) returned');
                    process.exit();
                }
            );

     request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
         });
             });
     _connection.execSql(request);
   }

console.log("\n\n----------------------------------------------TERM CONSULTA---------------------------------------------------\n\n");


console.log("\n\n\n****************************** CHAMADA GETTESTE ***********************************\n\n\n");


}




module.exports = function(){

	return sqlTestDAO;

}