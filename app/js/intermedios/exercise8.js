function enviarCadena() {
	let cadena = document.getElementById("cadenatxt").value;
	cadenatxt.value = "";
	esPalindromo(cadena);
}

function esPalindromo(cadena) {
	
	cadena = cadena.toLowerCase().replace(/\s/g, '');
	let invertida = cadena.split('').reverse().join('');

	let resultado = document.getElementById("pintermedio8");

	if (cadena === '') {
		resultado.textContent = "No debe escribir una cadena vacía.";
		resultado = "No debe escribir una cadena vacía.";
	} else if (cadena === invertida) {
		resultado.textContent = "La cadena: '" + cadena + "' es un palíndromo.";
		resultado = "La cadena: '" + cadena + "' es un palíndromo.";
		alertify.success('Es Palíndromo.').set({ transition: 'flipy' }).show();
	} else {
		resultado.textContent = "La cadena: '" + cadena + "' no es un palíndromo.";
		resultado = "La cadena: '" + cadena + "' no es un palíndromo.";
		alertify.error('No es Palíndromo.').set({ transition: 'flipy' }).show();
	}
}
