create table Pessoa(
  cod_pessoa int not null primary key,
  nome_pessoa varchar(50),
  cpf_pessoa varchar(11) not null,
)

create table ONG(
  cod_ong int not null primary key,
  nome_ong varchar(50),
  cnpj varchar(14),
  cod_responsavel int foreign key references Pessoa(cod_pessoa),
  cod_area int foreign key references Area_De_Atuacao(cod_area),
)

create table Doacao(
  cod_doacao int not null primary key,
  quantidade_doacao int,
  data_doacao varchar(10),
  cod_ong_envia int foreign key references ONG(cod_ong),
  cod_ong_recebe int foreign key references ONG(cod_ong),
  cod_produto int foreign key references Produto(cod_produto),
)

create table Pedido(
  cod_ong int foreign key references ONG(cod_ong),
  cod_produto int foreign key references Produto(cod_produto),
  quantidade_pedido int not null,
  status_pedido int,
  valido_pedido int,
)

create table Produto(
  cod_produto int not null primary key,
  nome_produt varchar(20),
  descricao_produto varchar(50),
)

create table Evento(
  cod_ong int foreign key ONG(cod_ong),
  data_evento varchar(10),
  hora_evento varchar(5),
  local_evento varchar(50),
)

create table Voluntario(
  cod_Pessoa int foreign key references Pessoa(cod_pessoa),
  cod_ong int foreign key references ONG(cod_ong),

)

create table Contato(
  cod_contato varchar(14)
  telefone1_contato varchar (15),
  telefone2_contato varchar (15),
  email_contato varchar(30),
  tipo_de_contato int, --0 para ONG, 1 pessoa fisica
)

create table Endereco(
  cod_endereco varchar(14),
  rua varchar(30),
  bairro varchar(30),
  numero int,
  tipo_de_endereco int,  --0 para ONG, 1 pessoa fisica
)

create table Banco(
  codigo_banco int not null primary key,
  agencia int,
  conta int,
  nome varchar(20),
  cod_ong int foreign key references ONG(cod_ong),
)

create table Area_De_Atuacao(
  codigo_area int not null primary key,
  nome varchar(20),
  descricao varchar(50),
)

create table log(
  codigo_log int not null primary key,
  data varchar(10),
  descricao varchar(50),
  atividade varchar(10),
)
