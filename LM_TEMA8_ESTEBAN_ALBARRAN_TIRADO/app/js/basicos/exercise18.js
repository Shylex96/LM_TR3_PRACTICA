let num1 = prompt("Dame el primer número:");
let num2 = prompt("Dame el segundo número:");
let resultado;

if (isNaN(num1) || isNaN(num2)) {
  alert("Se deben ingresar números válidos.");
	document.getElementById("pbasicos18").innerHTML = "Ingrese números y no otros caracteres.";
} else {
  if (num1 === num2) {
    resultado = "Los números introducidos son iguales.";
  } else {
    resultado = "Los números introducidos son distintos.";
  }
	document.getElementById("pbasicos18").innerHTML = resultado;
}


