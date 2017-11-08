var req = require('tedious').Request;

function sqlDAO(kit_connection) {

	console.log("*************");
	console.log(kit_connection);
	console.log("*************");

	var kit = kit_connection;

	console.log("++++++++++++++");
	console.log(kit);
	console.log("++++++++++++++");

		console.log("\n\n++++++++A++++++");
	console.log(kit.ClassConnection);
	console.log("++++++++++++++");

	console.log("\n\n++++++++B++++++");
	console.log(kit.ClassRequest);
	console.log("++++++++++++++");

	this._conn =  new kit.ClassConnection(kit.config);
	this._Request = kit.ClassRequest;

	console.log("\n\n++++++++C++++++");
	console.log(this._Request);
	console.log("++++++++++++++");


	console.log("\n\n++++++++SAME TO MODULE?++++++");
	console.log(this._Request === req);
	console.log("++++++++++++++");
	

}


sqlDAO.prototype.getTeste = function() {


	console.log("\n\n@@@@@@@@THIS@@@@@@@@@@@@@@");
	console.log(this);
	console.log("@@@@@@@@@@@@@@@@@@@");

	console.log("\n\n++++++++SAME TO MODULE?++++++");
	console.log(this._Request === req);
	console.log("++++++++++++++");


	this._conn.on('connect', function(err) 
   {
     if (err) 
       {
          console.log(err)
       }
    else
       {
           
				     console.log('Reading rows from the Table...');

				       // Read all rows from table
				    var request = new req( "SELECT * FROM dbo.TESTE",
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
				     this._conn.execSql(request);


       }

   });

}



module.exports = function() {

	return sqlDAO;

}