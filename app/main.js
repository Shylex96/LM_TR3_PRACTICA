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
	if (window.innerWidth > 1750) {
		heading.textContent = 'Práctica LM Tema 8 - Esteban Albarrán Tirado';
	} else if (window.innerWidth <= 1750 && window.innerWidth >= 1300) {
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

function restartPage() {
	location.reload();
}

$(document).ready(function () {
	// Oculta todas las secciones por defecto
	$('section').hide();

	// Botón 1 -- Ejercicio 17 (básico)
	$('#nav-btn1').click(function () {
		
		$.getScript('./js/basicos/exercise17.js', function () {});

		$('section').hide();
		$('#basicos17').show();
	});

	// Botón 2 -- Ejercicio 18 (básico)
	$('#nav-btn2').click(function () {

		$.getScript('./js/basicos/exercise18.js', function () {});

		$('section').hide();
		$('#basicos18').show();
	});

	// Botón 3 -- Ejercicio 19 (básico)
	$('#nav-btn3').click(function () {

		$.getScript('./js/basicos/exercise19.js', function () {});

		$('section').hide();
		$('#basicos19').show();
	});

	// Botón 4 -- Ejercicio 20 (básico)
	$('#nav-btn4').click(function () {

		$.getScript('./js/basicos/exercise20.js', function () {});

		$('section').hide();
		$('#basicos20').show();
		$('#titulo').show();
	});

	// Botón 5 -- Ejercicio 21 (básico)
	$('#nav-btn5').click(function () {

		$.getScript('./js/basicos/exercise21.js', function () {});

		$('section').hide();
		$('#basicos21').show();
	});

	// Botón 6 -- Ejercicio 3 (intermedio)
	$('#nav-btn6').click(function () {

		$.getScript('./js/intermedios/exercise3.js', function () {});

		$('section').hide();
		$('#intermedios3').show();
	});

	// Botón 7 -- Ejercicio 6 (intermedio)
	$('#nav-btn7').click(function () {

		$.getScript('./js/intermedios/exercise6.js', function () {});

		$('section').hide();
		$('#intermedios6').show();
	});

	// Botón 9 -- Ejercicio 8 (intermedio)
	$('#nav-btn8').click(function () {

		$.getScript('./js/intermedios/exercise8.js', function () {});

		$('section').hide();
		$('#intermedios8').show();
	});

	// Botón 9 -- Ejercicio 10 (intermedio)
	$('#nav-btn9').click(function () {

		$.getScript('./js/intermedios/exercise10.js', function () {});

		$('section').hide();
		$('#intermedios10').show();
	});

	// Botón 10 -- Ejercicio 2 (avanzado)
	$('#nav-btn10').click(function () {

		$.getScript('./js/avanzados/exercise2.js', function () {});

		$('section').hide();
		$('#avanzados2').show();
	});
});
