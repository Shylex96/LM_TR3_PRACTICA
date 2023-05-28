/*
#############################################################
### Usado para practicar solicitudes AJAX - No hacer caso ###
#############################################################

// Cuando cargue los elementos html
$(document).ready(function () {
	// Controlar el evento de clic en los botones del nav
	// seleccionar todos los elementos del DOM que tienen la clase "nav-button"
	$(".nav-button").on("click", function () {
		// Obtener a que botón se hizo clic (valor del atributo)
		let jsFile = $(this).data("js");
		loadContent(jsFile);
	});

	// cargar el contenido con el valor
	function loadContent(jsFile) {
		$.ajax({
			url: jsFile,
			dataType: "text",
			success: function (data) {
				$("#content").html(data);
			},
			error: function () {
				alert("Error al cargar el archivo JS.");
			}
		});
	}
});
*/

// ### # # # # # # # # Código: # # # # # # # # ###
const heading = document.getElementById('h-main');

// Función para cambiar el texto del h1
function changeHeadingText() {
	if (window.innerWidth > 1650) {
		heading.textContent = 'Práctica LM Tema 8 - Esteban Albarrán Tirado';
	} else if (window.innerWidth <= 1650 && window.innerWidth >= 1300) {
		heading.textContent = 'Práctica LM Tema 8';
	} else if (window.innerWidth <= 1300 && window.innerWidth >= 800) {
		heading.textContent = 'Práctica LM';
		heading.style.marginLeft = '10%';
	} else if (window.innerWidth <= 800 && window.innerWidth >= 700) {
		heading.textContent = 'Práctica';
	} else {
		heading.textContent = '';
	}
}

// Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('DOMContentLoaded', changeHeadingText);
window.addEventListener('resize', changeHeadingText);
