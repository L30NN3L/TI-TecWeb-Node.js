var mysql = require('mysql');

var connMySQL = function() {

	console.log("Conexão com banco de dados foi estabelecida");

	return mysql.createConnection({

		host: 'mysql367.umbler.com',
		port: 41890,
		user:'pucsg',
		password:'PucSG2017.',
		database:'db-ong-ti'

	});

}

module.exports = function(){

	console.log('O autoload carregou o módulode conexão com o banco de dados');
	return connMySQL;
	
}

	

//var sql = require("mssql");

//const conexao = "Server=DEKTOP-7KECBE2\\SQLSERVER2017;Database=DB_ONG-project;User Id=AzureAD\\HugoLeonel;Password=;encrypt=true";

//const conex = "Server=db-ong-ti.database.windows.net;Database=DB_ONG-project;User Id=pucsg;Password=Puc$G2017.;encrypt=true";

/*
const dbConfig = {
	server: 'db-ong-ti.database.windows.net',
	database: 'DB_ONG-project',
	user: 'pucsg',
	password: 'Puc$G2017.',
	options: {
		encrypt: true
	}
} */

/*
var dbConfigLeonel = {
	server: "leonnell.database.windows.net",
	database: "TesteSQL",
	user: "Leon.net",
	password: "sqlTeste135",
	options: {
		encrypt: true
	}

} */

/*
module.exports.instance_conn = function(){

	//console.log(sql);

 	var conn = new sql.ConnectionPool(dbConfig);

 	var request = new sql.Request(conn);

 	return {conn : conn, request : request};

} */


//module.exports.sql = sql;
//module.exports.dbConfig = dbConfig;
