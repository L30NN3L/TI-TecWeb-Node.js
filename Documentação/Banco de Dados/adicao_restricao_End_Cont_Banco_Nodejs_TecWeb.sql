# use testemysql;

# describe ong;

# use banco_veio;

# describe ong;


use testemysql;

 alter table Contato 
 add column cont_fk_ref_ong varchar(14) null,
 add constraint foreign key Contato_ONG(cont_fk_ref_ong) references ONG(cnpj);
 
 alter table Contato
 add column cont_fk_ref_pessoa varchar(11) null,
 add constraint foreign key Contato_Pessoa(cont_fk_ref_pessoa) references Pessoa(cpf_pessoa);

 alter table Endereco 
 add column end_fk_ref_ong varchar(14) null,
 add constraint foreign key Endereco_ONG(end_fk_ref_ong) references ONG(cnpj);
 
 alter table Endereco 
 add column end_fk_ref_pessoa varchar(11) null,
 add constraint foreign key Endereco_Pessoa(end_fk_ref_pessoa) references Pessoa(cpf_pessoa);


 
 
 
 