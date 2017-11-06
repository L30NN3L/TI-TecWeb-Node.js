
	Status do Trabalho:
	
	A integração do sistema com a View, Parte Lógica e Banco de Dados se mantém em nível difícil.
	Precisamos manter contato e testar o site sempre que puder.
	
	Existem conflitos nos requisitos, alguns são criados na View, outros no Banco de Dados.
	Não existe padrão e isso poderia ajudar na integração.
	
	Regras para o Front-end:
	 * Sempre que implementar uma tag <input> acresentar atributo name, pois o Node necessita (não é frescura minha, nem firula)
	 * Colocar type dos Botões dos Formulários em submit
	 * Verificar se os botões do Formulário esta entre a tag <form>
	 * Não é necessário colocar extensões .html aos links, pois os Routers tratam isso.
	 
	 Regras para o Back-end:
	 * Certificar integridade. 
	 Exemplos: 
	 ( "id de Pessoa é auto_incremental?",
	   "Não seria necessário Herança(sim Herança no Banco de Dados, se lembram de algo que Claudiney deu aula?) para dividir Pessoa_Fisica para Pessoa_Juricia, já que todo tipo de Pessoa, seja Física ou Jurícia se consta em uma Tabela?"
	   "id de ONG é auto_incremental?" )
	   
	 * Analisar requisitos declarados na View, analisar requisitos declarados no Banco de Dados e Re-projetar o Banco!
	 * Testar pra caralho os formulários e o banco do Azure!
	 * Pesquisar video-aulas de como utilizar a biblioteca do SQL Server no Node.js, comunicar para todos os que tem interesse em implementar o Back-End qualquer video-aula que ajude no nosso trabalho.
	 
	 É isso.
	 
	 
	
	
	