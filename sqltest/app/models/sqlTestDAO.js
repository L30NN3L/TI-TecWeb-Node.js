function sqlTestDAO(inst_conn) {

	this._connection = inst_conn;
	this._Request = inst_conn.ClassRequest;

}

sqlTestDAO.prototype.getTeste = function() {


	console.log("\n\n");
	console.log("_connection");
	console.log(this._connection);



	// Attempt to connect and execute queries if connection goes through
this._connection.on('connect', function(err) 
   {
     if (err) 
       {
          console.log(err)
       }
    else
       {
           
				     console.log('Reading rows from the Table...');

				       // Read all rows from table
				    var request = new this._Request(
				          ""SELECT * "FROM dbo.TESTE",
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
				     this._connection.execSql(request);


       }
   }
 );


    
   



}

module.exports = function() {

	return sqlTestDAO;

}