var modulo_dbConn = require('./config/dbConn.js');
var modulo_sqlDAO = require('./app/models/sqlDAO.js');
var modulo_DAO = require('./app/models/DAO.js');

var tedious = require('tedious');

var Connection = tedious.Connection;
var Request = tedious.Request;

var bagui = 
   {
     userName: 'Leon.net', // update me
     password: 'sqlTeste135', // update me
     server: 'leonnell.database.windows.net', // update me
     options: 
        {
           database: 'TesteSQL' //update me
           , encrypt: true
        }
   };


console.log("****1 \n\n ****");
console.log(modulo_dbConn);
console.log("****2 \n\n ****");
console.log(modulo_sqlDAO);
console.log("****3 \n\n ****");
console.log(tedious);
console.log("****4 \n\n ****");

	var instancia = modulo_dbConn.configure();
	console.log(instancia);

console.log("****5 \n\n ****");

//	var contrutorDAO = modulo_sqlDAO();
    var construtor_dao = modulo_DAO();
    console.log(construtor_dao);

//	console.log(contrutorDAO);

console.log("****6 \n\n ****");

 //  var modeloDAO = new contrutorDAO(instancia);
 var modeloDAO = new construtor_dao();

console.log("7¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");

   /* console.log(modeloDAO);

   console.log("8+++++++++++++++++++++++++++++++++++++++++++++++++");

  // console.log(modeloDAO.getTeste());
  modeloDAO.set_kit(instancia);

  console.log(modeloDAO);


   console.log("9§§§§§§§§§§§§§§§§§§§§§§§§§§§§6");

   modeloDAO.CreateConnection();

   console.log(modeloDAO);

 */
   console.log("9\t*\t*\t*\t*6");

   modeloDAO.getTeste(instancia);


/*

  var _conection = instancia.ClassConnection;
  var _req = instancia.ClassRequest;

  var _conn = new _conection(instancia.config);

  */

 /*
   var connection = new Connection(bagui);

   console.log(connection);

   */

/*

_conn.on('connect', function(err) 
   {
     if (err) 
       {
          console.log(err)
       }
    else
       {
           
             console.log('Reading rows from the Table...');

               // Read all rows from table
            var request = new _req( "SELECT * FROM dbo.TESTE",
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
             _conn.execSql(request);


       }

   });

   */
