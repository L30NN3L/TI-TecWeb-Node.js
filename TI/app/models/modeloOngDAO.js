module.exports = function() {

	this.getOngs = function(connection,callback){

		connection.query('select * from Endereco, ONG, Contato  group by ONG.cnpj', callback); 

      	connection.end();

	}

	this.getPesquisaPorCidade = function(connection,callback){

		var sql = "select * from ONG inner join Endereco on ONG.cnpj = Endereco.cod_endereco;"

		connection.query(sql, callback); 

      	connection.end();

	}

	this.getPesquisaPorCidadeTipo = function(connection,callback){

		var sql = 'select * from ONG inner join Endereco on ONG.cnpj = Endereco.cod_endereco where ONG.areaDeAtuacao = `${txtPesquisa}`;'

		connection.query(sql, callback); 

      	connection.end();

	}

	this.getPesquisaPorArea = function(connection,callback){

		var sql = ' select * from ONG where areaDeAtuacao = `${txtPesquisa}`;'

		connection.query(sql, callback); 

      	connection.end();

	}

	this.inserirONG = function(dados_ong, connection, callback){

		connection.query('insert into ONG set ? ', dados_ong, callback);

		//connection.end();

	}

	

//#################################################################################################################################

//Filtros de Pesquisa.
/*
######PESQUISA POR CIDADE

select * from ong
inner join endereco on ong.cnpj = endereco.cod_endereco;


######PESQUISA POR AREA

select * from ONG 
where areaDeAtuacao = txtPesquisa;

######PESQUISA POR CIDADE E TIPO

select * from ong
inner join endereco on ong.cnpj = endereco.cod_endereco
where ong.areaDeAtuacao = txtPesquisa;


*/


//#################################################################################################################################


	return this;

}