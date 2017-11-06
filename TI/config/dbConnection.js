var sql = require("mssql");

//const conexao = "Server=DEKTOP-7KECBE2\\SQLSERVER2017;Database=DB_ONG-project;User Id=AzureAD\\HugoLeonel;Password=;encrypt=true";

//const conex = "Server=db-ong-ti.database.windows.net;Database=DB_ONG-project;User Id=pucsg;Password=Puc$G2017.;encrypt=true";

const conexao = {
	server: 'db-ong-ti.database.windows.net',
	database: 'DB_ONG-project',
	user: 'pucsg',
	password: 'Puc$G2017.',
	options: {
		encrypt: true
	}
} 



function connection(){
	console.log("Conexão feita");
	return sql.connect(conexao);
}
function request(){
	console.log("Requisição");
	return new sql.Request(conexao);
}




//
module.exports.connection = connection;
module.exports.request = request;
/*
module.exports = function(){
    connection: sql.connect(conexao),
    request: new sql.request()	
	
};*/