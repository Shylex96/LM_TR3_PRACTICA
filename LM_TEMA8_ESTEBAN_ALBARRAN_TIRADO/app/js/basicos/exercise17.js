let numero = prompt("Ingrese un número:");

if (numero === null || numero === "") {
  document.getElementById("pbasicos17").innerHTML = "No se ha introducido ningún número.";
} else if (isNaN(numero)) {
  alert("El valor ingresado no es válido.");
  document.getElementById("pbasicos17").innerHTML = "Ingrese números y no otros caracteres.";
} else {
  let tablaMultiplicar = "<h3>Tabla de multiplicar del " + numero + ":</h3>";

  for (let i = 1; i <= 10; i++) {
    tablaMultiplicar += numero + " x " + i + " = " + (numero * i) + "<br>";
  }

  document.getElementById("pbasicos17").innerHTML = tablaMultiplicar;
}
