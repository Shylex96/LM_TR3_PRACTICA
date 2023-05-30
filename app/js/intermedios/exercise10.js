
// Función para mostrar la alerta con la capital
function mostrarCapital(pais) {
	let capital;

	// Asigna la capital correspondiente según el país
	switch (pais) {
		case "españa-img":
			capital = "Madrid";
			break;
		case "portugal-img":
			capital = "Lisboa";
			break;
		case "francia-img":
			capital = "París";
			break;
		case "italia-img":
			capital = "Roma";
			break;
	}

	// Muestra la alerta con la capital
	alertify.alert("Capital","La capital de " + pais.replace("-img", "").toUpperCase() + " es " + capital + ".");
}

// Obtén todos los elementos con la clase 'cuadrado'
let cuadrados = document.getElementsByClassName("cuadrado");

// Recorre los elementos y agrega el evento 'mouseenter'
for (let i = 0; i < cuadrados.length; i++) {
	cuadrados[i].addEventListener("mouseenter", function (event) {
		// Obtiene el ID de la imagen dentro del div
		let imagenId = event.target.children[0].id;

		// Muestra la alerta con la capital correspondiente
		mostrarCapital(imagenId);
	});
}

