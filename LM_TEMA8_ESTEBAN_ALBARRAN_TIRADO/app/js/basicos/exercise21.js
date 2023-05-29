let cuadrado1 = document.getElementById("cuadrado1");
let cuadrado2 = document.getElementById("cuadrado2");
let cuadrado3 = document.getElementById("cuadrado3");
let cuadrado4 = document.getElementById("cuadrado4");
let cuadrado5 = document.getElementById("cuadrado5");

// Seleccionar los elementos
let body = document.querySelector('body');
let header = document.querySelector('header');
let section = document.querySelector('section');
let section21 = document.getElementById('basicos21');

// Agregar event listeners a los cuadrados
cuadrado1.addEventListener("mouseover", function () { cambiarColorFondo("red") });
cuadrado1.addEventListener("mouseout", function () { cambiarColorFondo("#444654") });

cuadrado2.addEventListener("mouseover", function () { cambiarColorFondo("blue") });
cuadrado2.addEventListener("mouseout", function () { cambiarColorFondo("#444654") });

cuadrado3.addEventListener("mouseover", function () { cambiarColorFondo("green") });
cuadrado3.addEventListener("mouseout", function () { cambiarColorFondo("#444654") });

cuadrado4.addEventListener("mouseover", function () { cambiarColorFondo("aqua") });
cuadrado4.addEventListener("mouseout", function () { cambiarColorFondo("#444654") });

cuadrado5.addEventListener("mouseover", function () { cambiarColorFondo("orange") });
cuadrado5.addEventListener("mouseout", function () { cambiarColorFondo("#444654") });

// Función para cambiar el color de fondo
function cambiarColorFondo(color) {
	body.style.backgroundColor = color;
	header.style.backgroundColor = color;
	section.style.backgroundColor = color;
	section21.style.backgroundColor = color;
}
