var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

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

var kit_connection = { nomeConection : Connection,
						nomeRequest : Request,
						config : bagui };


console.log("\n\n\n\nKit Connection:");
console.log(kit_connection);

console.log("\n\n\n\nConnection:");
console.log(Connection);

console.log("\n\n\n\nnomeConection:");
console.log(kit_connection.nomeConection);

console.log("\n\n\n\nIS THE SAME???");
console.log(kit_connection.nomeConection === Connection);

//var conexao = new kit_connection.nomeConection(bagui);
//var conexao = new Connection(bagui);