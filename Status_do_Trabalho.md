
	
	/*
	
	06/11/2017
	
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
	   "Não seria necessário Herança para dividir Pessoa_Fisica para Pessoa_Juricia, já que todo tipo de Pessoa, seja Física ou Jurícia se consta em uma Tabela?"
	   "id de ONG é auto_incremental?" )
	   
	 * Analisar requisitos declarados na View, analisar requisitos declarados no Banco de Dados e Re-projetar o Banco!
	 * Testar pra caralho os formulários e o banco do Azure!
	 * Pesquisar video-aulas de como utilizar a biblioteca do SQL Server no Node.js, comunicar para todos os que tem interesse em implementar o Back-End qualquer video-aula que ajude no nosso trabalho.
	 
	 É isso.
	 
	 */
	 
	 
	 /* 
	 
		07/11/2017
		
		Status do Trabalho:
		
		Criação de dois "executáveis" para testar, de um app as consultas ao Banco e de outro as navegações do Site

		Estou tendo foco total nas tentivas de comunicar com Banco utilizando Modularização para deixar o projeto padronizado em MVC
		Para deixar mais aberto para melhorias e melhor facilidade de expandir o aplicativo quando o trabalho/projeto esta sendo implementado em grupo.
		
		Consegui uma comunicação sem módulo em um teste com um novo pacote, que não é o "mssql" (e sim "tedious"), para realizar consulta a um Banco meu do Azure
		O teste que fiz esta armazenado na pasta "sqltest", o "demo.js" é a implementação sem módulo e funciona.
		Deixei o link sobre o material que usei como base, no arquivo "Links_video_aula_SQL_Server_NodeJS.md"
		
		Mas pra simplificar a vida: "https://docs.microsoft.com/pt-br/azure/sql-database/sql-database-connect-query-nodejs"
		
		Deixei códigos com problemas de conexão a Banco de Dados, aquele que deixar resoluções para mim terá minha gratidão eterna, te pago um salgado com refresco.
		
		Por enquanto é só pessoal!
		
		PS: Qualquer dúvida que tiverem sobre o código, me comuniquem.
		
	 */
	 
	 
	
	
	