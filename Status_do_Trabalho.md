
	Status do Trabalho:
	
	A integra��o do sistema com a View, Parte L�gica e Banco de Dados se mant�m em n�vel dif�cil.
	Precisamos manter contato e testar o site sempre que puder.
	
	Existem conflitos nos requisitos, alguns s�o criados na View, outros no Banco de Dados.
	N�o existe padr�o e isso poderia ajudar na integra��o.
	
	Regras para o Front-end:
	 * Sempre que implementar uma tag <input> acresentar atributo name, pois o Node necessita (n�o � frescura minha, nem firula)
	 * Colocar type dos Bot�es dos Formul�rios em submit
	 * Verificar se os bot�es do Formul�rio esta entre a tag <form>
	 * N�o � necess�rio colocar extens�es .html aos links, pois os Routers tratam isso.
	 
	 Regras para o Back-end:
	 * Certificar integridade. 
	 Exemplos: 
	 ( "id de Pessoa � auto_incremental?",
	   "N�o seria necess�rio Heran�a(sim Heran�a no Banco de Dados, se lembram de algo que Claudiney deu aula?) para dividir Pessoa_Fisica para Pessoa_Juricia, j� que todo tipo de Pessoa, seja F�sica ou Jur�cia se consta em uma Tabela?"
	   "id de ONG � auto_incremental?" )
	   
	 * Analisar requisitos declarados na View, analisar requisitos declarados no Banco de Dados e Re-projetar o Banco!
	 * Testar pra caralho os formul�rios e o banco do Azure!
	 * Pesquisar video-aulas de como utilizar a biblioteca do SQL Server no Node.js, comunicar para todos os que tem interesse em implementar o Back-End qualquer video-aula que ajude no nosso trabalho.
	 
	 � isso.
	 
	 
	
	
	