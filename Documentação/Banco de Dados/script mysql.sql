# Script aprimorado para Realizar testes no MySQL Workbench
	
 drop database TesteMySQL;

  create database TesteMySQL;

 use TesteMySQL;

create table Pessoa(

	  nome_pessoa varchar(50),
	  cpf_pessoa varchar(14) not null primary key,
	  dataNascimento date not null,
	  profissao varchar(50),
	  estadoCivil varchar(20),
	  sexo char not null,
	  senha varchar(50) not null
      
) ENGINE = InnoDB;

create table ONG(

    nomeFatasia varchar(50) not null,
    razaoSocial varchar(50),
    cnpj varchar(14) not null primary key,
    site varchar(50),
    dataFundacao date not null,
    areaDeAtuacao varchar(30) not null,
    cpfResponsavel varchar(11) not null,
    foreign key(cpfResponsavel) references Pessoa(cpf_pessoa)
    
) ENGINE = InnoDB;

create table Pedido(

	  codPedido int auto_increment primary key,
	  cnpj varchar(14) not null,
	  foreign key(cnpj) references ONG(cnpj),
	  descricaoPedido text not null,
	  dataPedidoInicio date not null,
	  dataPedidoFim date not null
  
) ENGINE = InnoDB;

create table Voluntario(

	  cpf_pessoa varchar(11) not null,
	  foreign key(cpf_pessoa) references Pessoa(cpf_pessoa),
	  cnpj varchar(14) not null,
	  foreign key(cnpj) references ONG(cnpj)

) ENGINE = InnoDB;

create table Contato(

	  #cod_contato varchar(14) primary key not null,
	  cod_contato int primary key auto_increment,
      telefone1_contato varchar (15) not null,
	  telefone2_contato varchar (15) not null,
	  email_contato varchar(30) not null
	 # tipo_de_contato int #0 para ONG, 1 pessoa fisica
      
) ENGINE = InnoDB;

create table Endereco(

	  #cod_endereco varchar(14) not null,
	  cod_endereco int primary key auto_increment,
      cidade varchar(50) not null,
	  rua varchar(30) not null,
	  bairro varchar(30) not null,
	  numero int not null,
	  uf varchar(2) not null,
	  complemento varchar(10),
	  cep varchar(9) not null
	 # tipo_de_endereco int #0 para ONG, 1 pessoa fisica
      
) ENGINE = InnoDB;

create table Banco(

	  codigo_banco int not null primary key,
	  agencia int,
	  conta int,
	  nome varchar(20),
	  cod_ong varchar(14),
	  foreign key(cod_ong) references ONG(cnpj)
      
) ENGINE = InnoDB;

