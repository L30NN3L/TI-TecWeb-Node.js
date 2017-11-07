
	
	/*
	
	06/11/2017
	
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
	   "N�o seria necess�rio Heran�a para dividir Pessoa_Fisica para Pessoa_Juricia, j� que todo tipo de Pessoa, seja F�sica ou Jur�cia se consta em uma Tabela?"
	   "id de ONG � auto_incremental?" )
	   
	 * Analisar requisitos declarados na View, analisar requisitos declarados no Banco de Dados e Re-projetar o Banco!
	 * Testar pra caralho os formul�rios e o banco do Azure!
	 * Pesquisar video-aulas de como utilizar a biblioteca do SQL Server no Node.js, comunicar para todos os que tem interesse em implementar o Back-End qualquer video-aula que ajude no nosso trabalho.
	 
	 � isso.
	 
	 */
	 
	 
	 /* 
	 
		07/11/2017
		
		Status do Trabalho:
		
		Cria��o de dois "execut�veis" para testar, de um app as consultas ao Banco e de outro as navega��es do Site

		Estou tendo foco total nas tentivas de comunicar com Banco utilizando Modulariza��o para deixar o projeto padronizado em MVC
		Para deixar mais aberto para melhorias e melhor facilidade de expandir o aplicativo quando o trabalho/projeto esta sendo implementado em grupo.
		
		Consegui uma comunica��o sem m�dulo em um teste com um novo pacote, que n�o � o "mssql" (e sim "tedious"), para realizar consulta a um Banco meu do Azure
		O teste que fiz esta armazenado na pasta "sqltest", o "demo.js" � a implementa��o sem m�dulo e funciona.
		Deixei o link sobre o material que usei como base, no arquivo "Links_video_aula_SQL_Server_NodeJS.md"
		
		Mas pra simplificar a vida: "https://docs.microsoft.com/pt-br/azure/sql-database/sql-database-connect-query-nodejs"
		
		Deixei c�digos com problemas de conex�o a Banco de Dados, aquele que deixar resolu��es para mim ter� minha gratid�o eterna, te pago um salgado com refresco.
		
		Por enquanto � s� pessoal!
		
		PS: Qualquer d�vida que tiverem sobre o c�digo, me comuniquem.
		
	 */
	 
	 
	
	
	