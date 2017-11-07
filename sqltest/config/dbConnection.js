var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Create connection to database
var config = 
   {
     userName: 'Leon.net', // update me
     password: 'sqlTeste135', // update me
     server: 'leonnell.database.windows.net', // update me
     options: 
        {
           database: 'TesteSQL' //update me
           , encrypt: true
        }
   }

module.exports.instance_conn = function() {

    var connection = new Connection(config);

    return { conn : connection, ClassRequest : Request };


}

