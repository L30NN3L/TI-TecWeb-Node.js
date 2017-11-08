function DAO() {

	this._con = {};
	this._req = {};
	this._config = {};
	this._connection = {};

}

DAO.prototype.set_kit = function(kit_connection){

	this._con = kit_connection.ClassConnection;
	this._req = kit_connection.ClassRequest;
	this._config = kit_connection.config;

}

DAO.prototype.CreateConnection = function(){

	this._connection = new this._con(this._config);

}

DAO.prototype.getTeste = function(kit_connection){


	var con = kit_connection.ClassConnection;
	var req = kit_connection.ClassRequest;
	var config = kit_connection.config;

	var connection = new con(config);


	connection.on('connect', function(err) 
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
             connection.execSql(request);


       }

   });



}


module.exports = function(){

	return DAO;

}