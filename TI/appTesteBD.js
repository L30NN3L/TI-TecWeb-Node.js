var app = require('./config/server');

console.log("!+++++++++++++++++++++++++++++++++++++++++!");
	console.log("!TESTE TESTE TESTE TESTE TESTE TESTE TESTE!");
	console.log("!BANCO	BANCO	BANCO	BANCO	BANCO	BANCO!");
	console.log("!TESTE TESTE TESTE TESTE TESTE TESTE TESTE!");
	console.log("!MÓDULO	MÓDULO	MÓDULO	MÓDULO	MÓDULO	MÓDULO!");
	console.log("!TESTE TESTE TESTE TESTE TESTE TESTE TESTE!");
	console.log("!BANCO	BANCO	BANCO	BANCO	BANCO	BANCO!");
	console.log("!TESTE TESTE TESTE TESTE TESTE TESTE TESTE!");
	console.log("!MÓDULO	MÓDULO	MÓDULO	MÓDULO	MÓDULO	MÓDULO!");
	console.log("!=========================================!");

console.log("========================================================================================================");
console.log("APP");
console.log(app);
console.log("========================================================================================================");
console.log("APP.APP");
console.log(app.app);
console.log("========================================================================================================");
console.log("APP.CONFIG");
console.log(app.config);
console.log("========================================================================================================");
console.log("APP.CONFIG.DBCONNECTION");
console.log(app.config.dbConnection);
console.log("========================================================================================================");
console.log("APP.CONFIG.DBCONNECTION.INSTANCE_CONN");
console.log(app.config.dbConnection.instance_conn);
console.log("========================================================================================================");
console.log("APP.CONFIG.DBCONNECTION.INSTANCE_CONN EXEC");
console.log(app.config.dbConnection.instance_conn());
console.log("========================================================================================================");
console.log("APP.APP.MODELS");
console.log(app.app.models);
console.log("========================================================================================================");
console.log("APP.APP.MODELS.TESTEDAO");
console.log(app.app.models.TesteDAO);
console.log("========================================================================================================");
console.log("APP.APP.MODELS.TESTEDAO EXEC");
var instance = app.config.dbConnection.instance_conn();
console.log(app.app.models.TesteDAO(instance));
console.log("========================================================================================================");
console.log("APP.APP.MODELS.TESTEDAO NEW EXEC");
console.log(new app.app.models.TesteDAO(instance));
console.log("========================================================================================================");
console.log("MODEL = NEW EXEC");
var model = new app.app.models.TesteDAO(instance);
console.log(model);
console.log("========================================================================================================");
console.log("MODEL.GETTESTE");
console.log(model.getTeste);
console.log("========================================================================================================");
console.log("MODEL.GETTESTE EXEC");

console.log(" CONSOLE.LOG(model.getTeste()): " + model.getTeste());
console.log("--------------------------------------------------------------------------------------------------------");
