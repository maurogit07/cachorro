// 
/*key press --> no momento da teclado pressionada
key up  --> no momento da tecla ser liberada
key down  --> no momento da tecla ser afundada*/

/// Keypress = invocado para cada caractere que for inserido:
$("#campo").keypress(function() {

	//alert('pressionou alguma tecla!');

});

/// Keydown = invocado para cada tecla pressionada:
$("#campo").keydown(function(evento) {

	if (evento.which == 37) {
		// Situação em que o usuário pressionou a seta da esquerda:
		alert("Tem que andar para trás!");
		$("#cachorro").css("margin-left", "50px");
	}

	if (evento.which == 38) {
		// Situação em que o usuário pressionou a seta de cima:
		alert("Tem que subir!");
		$("#cachorro").css("margin-top", "250px");
	}

	if (evento.which == 39) {
		// Situação em que o usuário pressionou a seta da direita:
		alert("Tem que andar para frente!");
		$("#cachorro").css("margin-left", "720px");


	}

	if (evento.which == 40) {
		// Situação em que o usuário pressionou a seta de baixo:
		alert("Tem que descer!");
		$("#cachorro").css("margin-top", "450px");
	}

});

/// Keyup = invocado para cada tecla liberada:
$("#campo").keyup(function() {

	//alert("tecla liberada pelo usuário");

});