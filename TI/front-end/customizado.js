$(function() {

	formataData('.calendario');
	$("#cpf").mask("999.999.999-99");
	$("#telefone1" ).mask("(99)9999-9999?9"); 
	$("#telefone2" ).mask("(99)9999-9999?9");
	$("#cep" ).mask("99999-999");
	$("#cnpj" ).mask("99.999.999/9999-99");
	
	
});


function formataData(campo){
	$(document).ready(function () {
		$(campo).datepicker({
			dateFormat: "dd/mm/yy",
			maxDate: 0,
			changeMonth: true,
			changeYear: true,
			viewMode: "years", 
			minViewMode: "years",
			dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
			monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
			language: "pt-BR"			
		});
	});
}