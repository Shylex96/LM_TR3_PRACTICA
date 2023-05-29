const paises = document.querySelectorAll(".pais");
const columna1 = document.getElementById("divBandera");
let bandera = document.getElementById("bandera");

const imagen1 = document.getElementById("imagen_oculta1");
const imagen2 = document.getElementById("imagen_oculta2");
const imagen3 = document.getElementById("imagen_oculta3");
const imagen4 = document.getElementById("imagen_oculta4");

function mostrarImagen1() {
	imagen1.style.display = "inline-block";
	imagen2.style.display = "none";
	imagen3.style.display = "none";
	imagen4.style.display = "none";
	bandera.remove();
}

function mostrarImagen2() {
	imagen2.style.display = "inline-block";
	imagen1.style.display = "none";
	imagen3.style.display = "none";
	imagen4.style.display = "none";
	bandera.remove();
}

function mostrarImagen3() {
	imagen3.style.display = "inline-block";
	imagen1.style.display = "none";
	imagen2.style.display = "none";
	imagen4.style.display = "none";
	bandera.remove();
}

function mostrarImagen4() {
	imagen4.style.display = "inline-block";
	imagen1.style.display = "none";
	imagen2.style.display = "none";
	imagen3.style.display = "none";
	bandera.remove();
}

function alertaCapital(pais, capital) {
	alert(`La capital de ${pais} es ${capital}.`);
	}

	paises.forEach(function(pais) {

		let capital;

		switch(pais.textContent) {
		case "España":
		capital = "Madrid";
		pais.addEventListener("mouseover", function() {
			mostrarImagen1();
			});
		break;
		case "Portugal":
		capital = "Lisboa";
		pais.addEventListener("mouseover", function() {
			mostrarImagen2();
			});
		break;
		case "Francia":
		capital = "París";
		pais.addEventListener("mouseover", function() {
			mostrarImagen3();
			});
		break;
		case "Italia":
		capital = "Roma";
		pais.addEventListener("mouseover", function() {
			mostrarImagen4();
			});
		break;
		default:
		capital = "Desconocido";
		}

		pais.addEventListener("mouseover", function() {

		alertaCapital(pais.textContent, capital);

		});
	});