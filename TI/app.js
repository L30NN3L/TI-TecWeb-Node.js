const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const sql = require('mssql');
const conexao = "Server=db-ong-ti.database.windows.net;Database=DB_ONG-project;User Id=pucsg;Password=Puc$G2017.;encrypt=true";

sql.connect(conexao)
   .then(conn => GLOBAL.conn = conn)
   .catch(err => console.log(err));


function excQuery(sqlQry, res){
    GLOBAL.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.json(err));
}


//configurando o body parser para pegar POSTS mais tarde
app.set('view engine', 'ejs'); //Configuando Engine HTML para EJS
app.set('views', './app/views'); //Onde renderizar

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
//router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
//app.use('/', router);
app.listen(port);
console.log('funcionando!');


//Rotas de acesso as pag.
app.get('/',function(req,res){
		res.render("index");
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



//Inserções
app.post('/cadastroONG', function(req,res){
		console.log("Cadastro ONG");

        //var requestSql = new sql.request;
        var nomeOng = req.body.nome.substring(0,50);
        var razaoSocial = req.body.razaoSocial.substring(0,50);
        var cnpj = req.body.cnpj.substring(0,14);
        var nome = req.body.nomeResponsavel.substring(0,50);
        var cpf = req.body.cpf.substring(0,12);
        var telefone = req.body.telefone.substring(0,15);
        var celular = req.body.celular.substring(0,15);
        var email = req.body.email.substring(0,30);
        var site = req.body.site.substring(0,50);
        var rua = req.body.rua.substring(0,30);
        var bairro = req.body.bairro.substring(0,30);
        var estado = req.body.estado.substring(0,2);
        var numero = parseInt(req.body.numero);
        var cod_area ;//req.body.area;
        var agencia = parseInt(req.body.agencia);
        var conta = parseInt(req.body.conta);
        
        //console.log(nome);
        //console.log(cpf);
        //excQuery(`INSERT INTO Clientes(Nome, CPF) VALUES('${nome}','${cpf}')`, res);

	});
app.get('/testeSelect',function(req,res){
    res.render("testeSelect");
    var cpf = req.body.cpf.substring(0,12);    
    excQuery('select * from Clientes where cpf= ' + cpf,res);
    console.log(res);
})
app.post('/testeSelect',function(req,res){
    var cpf = req.body.cpf.substring(0,12);    
    excQuery('select * from Clientes where cpf= ' + cpf,res);
    console.dir(res);
//1272287414
})

app.post('/cadastroVoluntario', function(req,res){
    console.log("Cadastro Voluntario");
    
    var nomeVoluntario = req.body.nomeVoluntario.substring(0,50);
    var dtNascimento = req.body.dtNascimento.substring(0,50);
    var sexo;
    var estadoCivil = req.body.estadoCivil.substring(0,50);
    var escolaridade = req.body.escolaridade.substring(0,30);
    var profissao = req.body.profissao.substring(0,50);
    var telefone1 = req.body.telefone1.substring(0,15);
    var telefone2= req.body.telefone2.substring(0,15);
    var email = req.body.email.substring(0,30);
    var cpf = req.body.cpf.substring(0,12);;
    var areaAtuacao = req.body.areaAtuacao.substring(0,20);
    var logradouro = req.body.logradouro.substring(0,30);
    var numero = parseInt(req.body.numero);
    var complemento = req.body.complemento.substring(0,20);
    var bairro = req.body.bairro.substring(0,30);
    var cidade = req.body.cidade.substring(0,50);
    var estado = req.body.estado.substring(0,2);
    var cep = req.body.cep.substring(0,9);

    //excQuery('INSERT INTO Pessoa(nome_pessoa,cpf_pessoa,data_nasc,sexo,estado_civil,escolaridade,profissao) VALUES ('${nomeVoluntario}','${cpf}','${dtNascimento}','${sexo}','${estadoCivil}','${escolaridade}','${profissao}',)',res);
    var cod_pessoa;
    var cod_ong;
    //excQuery('INSERT into Endereco(cod_endereco,rua,bairro,numero,tipo_de_endereco,cep,complemento,uf) VALUES('${cod_pessoa}','${logradouro}','${bairro}',1,'${cep}','${complemento}','${estado}')',res)
    //excQuery('INSERT into Contato(cod_contato,telefone1_contato,telefone2_contato,email_contato,tipo_de_contato) VALUES('${cod_pessoa}','${telefone1}','${telefone2}','${email}',1)', res);
    //excQuery('INSERT into Voluntario(cod_Pessoa,cod_ong) VALUES('${cod_pessoa}','${cod_ong}')',res);

})
