var express = require('express');
var app = express();         
var bodyParser = require('body-parser');
var port = 3000; //porta padrão
//#################################################################################################################################
//configurando o body parser para pegar POSTS mais tarde
app.set('view engine', 'ejs'); //Configuando Engine HTML para EJS
app.set('views', './app/views'); //Onde renderizar
//app.use(express.static('./app/views'));//Arquivos estaticos das views
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

//#################################################################################################################################
//Conexão com MySql

var mysql = require('mysql');  // Check!

var connection = mysql.createConnection({
    host: 'mysql367.umbler.com',
    port: 41890,
    user:'pucsg',
    password:'PucSG2017.',
    database:'db-ong-ti'
}); //Check!

/*connection.connect(function(err){
  if(err) return console.log(err);
  console.log('conectou no BD de boas!');
});
*/



//#################################################################################################################################
//Rotas de acesso as pag.
/*
app.get('/',function(req,res){
		res.render("index", {teste : "teste"});
	});
app.get('/cadastroVoluntario', function(req,res){
		res.render("cadastroVoluntario");
	});
app.get('/cadastroPedidosONG',function(req,res){
		res.render("cadastroPedidosONG");
	});
app.get('/login', function(req,res){
		res.render("login");
	});
app.get('/mostrarONG',function(req,res){
		res.render("mostrarONG");
	});
app.get('/sobre',function(req,res){
		res.render("sobre");
	});
app.get('/TelaOng',function(req,res){
		res.render("TelaOng");
	});
app.get('/cadastroONG', function(req, res) {
            res.render("cadastroONG");            
        });
app.get('/sobre',function(req,res){
    res.render("sobre");
});
app.get('/cadastroPedidosONG', function(req,res){
    res.render("cadastroPedidosONG");
});
app.get('/aprendacriarong', function(req,res){
    res.render("aprendaCriarOng");
})
app.get('aprendaong', function(req,res){
    res.render("aprendaOng");
})*/
//#################################################################################################################################
//Inserções
//Cadastro ONGs
app.post('/cadastroONG', function(req,res){
		console.log("Cadastro ONG");     
        //Cadastro da ONG   
        /*var nomeFantasia = req.body.nome.substring(0,50);
        var razaoSocial = req.body.razaoSocial.substring(0,50);
        var cnpj = req.body.cnpj.substring(0,14);
        var area;
        var site;
        var dataFundacao;
        var cpfResponsavel;
        //cadastro Responsavel
        var nome = req.body.nomeVoluntario.substring(0,50);
        var cpf = req.body.cpf.substring(0,12);
        var dataNascimento;
        var profissao;
        var estadoCivil;        
        var sexo;
        var senha;
        //Cadastro de contato da ong
        var cod_contato;
        var telefone = req.body.telefone.substring(0,15);
        var celular = req.body.celular.substring(0,15);
        var email = req.body.email.substring(0,30);        
        //Cadastro endereço da ONG
        var cod_endereco;
        var rua = req.body.rua.substring(0,30);
        var bairro = req.body.bairro.substring(0,30);
        var estado = req.body.estado.substring(0,2);
        var numero = parseInt(req.body.numero);
        var cidade;
        var uf;
        var cep;
        var complemento;
        //Cadastro do Banco da ONG
        var codigo_banco;
        var agencia = parseInt(req.body.agencia);
        var conta = parseInt(req.body.conta);
        var nomeBanco;
        */

        execQuery(`INSERT INTO Pessoa(nome_pessoa, cpf_pessoa,dataNascimento,profissao,estadoCivil,sexo,senha) VALUES('${nome}','${cpf}','${dataNascimento}','${profissao}','${estadoCivil}','${sexo}','${senha}');
            INSERT INTO ONG(nomeFatasia, razaoSocial, cnpj, site, dataFundacao, areaDeAtuacao, cpfResponsavel) VALUES('${nomeFantasia}','${razaoSocial}','${cnpj}','${site}','${dataFundacao}','${areaDeAtuacao}','${cpf}');
            INSERT into Banco(codigo_banco,agencia,conta,nome,cod_ong) VALUES('${codigo_banco}','${agencia}','${conta}','${nomeBanco}','${cnpj}');
            INSERT into Endereco(cod_endereco,tipo_de_endereco,cidade, rua, bairro, numero, uf, complemento, cep) VALUES('${cnpj}','${0}','${cidade}','${rua}','${bairro}','${numero}','${uf}','${complemento}','${cep}');
            INSERT into contato(cod_contato, telefone1_contato, telefone2_contato, email_contato,tipo_de_contato) VALUES('${cnpj}','${telefone}','${celular}','${email}','${0}')`,res);

	});
//Cadastro Voluntario
app.post('/cadastroVoluntario', function(req,res){
    
    console.log("Cadastro Voluntario");
    
    //Cadastro Pessoa    
    //var nomeVoluntario = req.body.nomeVoluntario.substring(0,50);
    //var cpf = req.body.cpf.substring(0,12);;
    //var dtNascimento =  new Date (req.body.dtNascimento.substring(0,10)); 
    //var sexo = req.body.radioSexo;
    //var estadoCivil = req.body.estadoCivil.substring(0,50);
    //var escolaridade = req.body.escolaridade.substring(0,30);
    //var profissao = req.body.profissao.substring(0,50);
    //var senha;
    //Cadastro contato da pessoa
    //var cod_contato;
    //var telefone = req.body.telefone.substring(0,15);
    //var celular = req.body.celular.substring(0,15);
    //var email = req.body.email.substring(0,30);      
    //Cadastro endereço da pessoa
    //var cod_endereco;
    //var rua = req.body.logradouro.substring(0,30);
    //var numero = parseInt(req.body.numero);
    //var complemento = req.body.complemento.substring(0,20);
    //var bairro = req.body.bairro.substring(0,30);
    //var cidade = req.body.cidade.substring(0,50);
    //var estado = req.body.estado.substring(0,2);
    //var uf;
    //var cep = req.body.cep.substring(0,9);
    //Cadastro do voluntario
    //var cnpjOng;
    
    execQuery(`INSERT INTO Pessoa(nome_pessoa, cpf_pessoa,dataNascimento,profissao,estadoCivil,sexo,senha) VALUES('${nomeVoluntario}','${cpf}','${dtNascimento}','${profissao}','${estadoCivil}','${sexo}','${senha}');            
            INSERT into Endereco(cod_endereco,tipo_de_endereco,cidade, rua, bairro, numero, uf, complemento, cep) VALUES('${cpf}','${1}','${cidade}','${rua}','${bairro}','${numero}','${uf}','${complemento}','${cep}');
            INSERT into contato(cod_contato, telefone1_contato, telefone2_contato, email_contato,tipo_de_contato) VALUES('${cpf}','${telefone}','${celular}','${email}','${1}');
            INSERT INTO Voluntario(cpf_pessoa, cnpj) VALUES ('${cpf}','${cnpjOng}')`,res);


});

app.post('/cadastroPedido', function(req,res){
    //var cnpjOng;
    //var descricaoPedido;
    //var dataPedidoInicio;
    //var dataPedidoFim;
    //execQuery('INSERT INTO Pedido(cnpj, descricaoPedido, dataPedidoInicio,dataPedidoFim) VALUES('${cnpjOng}','${descricaoPedido}','${dataPedidoInicio}','${dataPedidoFim}')',res);

});
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
//ÁREA DE TESTES


var execQuery = function execQuery(sqlQuery,res){
    console.log('dentro da funcao');
  
    console.log(error);
    console.log(sqlQuery);
    console.log(res);

    if(error){
        console.log(error);
        return;
    } 
        


    connection.query(sqlQuery, 
        
        function(error, results){     
      
              if(error){
                console.log("Deu pau!");
                console.log(error);
              }
                

              else{
                    console.log( "ein?: " +results);
                   // res.send(results);
                    
                }
                
              console.log('executou a query!'); 
        }

    );



}


app.get('/testeSelect',function(req,res){
    //res.render("testeSelect");
    console.log("Executou testeSelect!");
    //excQuery('select * from Clientes', res);
    //console.log("***************");
   // console.log("Função:");
  //  console.log(execQuery);
  //  console.log("***************");
  //  console.log("Executando Função:");
 //   console.log(execQuery());
 //   console.log("***************");
  //  console.log("Executando Função com Parâmetro:");
 //   console.log(execQuery('select * from teste',res));
    

  //  console.log("***************");
  //  console.log("req:");
  //  console.log(req);
//console.log("***************");
//console.log("res:");
//console.log(res);


// execQuery('select * from teste', res);

        /*function(error,result){
        
            if(error) {
                
                console.log("Deu pau?");
                console.log(error);
            
            } else {

            console.log("Dentro do select");
            console.log("Teste: " + result);
            res.render("testeSelecao", {testeSelect : result});
            
            } 

        
        } );*/

    //Esse código abaixo tá Filé
    connection.query('select * from teste', 
        
        function(error, results){     
      
              if(error){
                console.log("Deu pau!");
                console.log(error);
                return;
              }

            console.log(results);

            var vetor = { testeSelect : results };

                   // res.send(vetor);

                   // console.log(testeSelect);



                res.render("joana", {testeSelect : results});
                 //   console.log(app.locals);
                
                
             // console.log('executou a query!');
              //console.log(app.locals); 
        }

    ); /*<= Filé */



    //var cpf = req.body.cpf.substring(0,12);    
    //excQuery('select * from Clientes',res);
   // console.log(res);
});
app.post('/testeSelect',function(req,res){
    var cpf = req.body.cpf.substring(0,12);
    excQuery('select * from Clientes where cpf= ' + cpf, function(error,result){       
            res.render("testeSelect/testeSelect", {testeSelect : result});

    });
    //console.dir(res);
//1272287414
})
//#################################################################################################################################

//Variáveis globais
//console.log(global);


//Aplicativo
//console.log(app);

app.listen(port, function() {
    console.log('funcionando!');
});
