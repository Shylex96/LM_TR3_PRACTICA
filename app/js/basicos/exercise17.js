let numero = prompt("Ingrese un número:");

if (numero === null || numero === "") {
	alertify.alert('Error', 'El valor ingresado no es válido o está vacío.').set('movable', false);
	alertify.error('Error').set({ transition: 'flipy' }).show();
  document.getElementById("pbasicos17").innerHTML = "No se ha introducido ningún número.";
} else if (isNaN(numero)) {
  alertify.alert('Error', 'El valor ingresado no es válido.').set('movable', false);
	alertify.error('Error').set({ transition: 'flipy' }).show();
  document.getElementById("pbasicos17").innerHTML = "Ingrese números y no otros caracteres.";
} else {
  let tablaMultiplicar = "<h3>Tabla de multiplicar del " + numero + ":</h3>";

  for (let i = 1; i <= 10; i++) {
    tablaMultiplicar += numero + " x " + i + " = " + (numero * i) + "<br>";
  }

  document.getElementById("pbasicos17").innerHTML = tablaMultiplicar;
	alertify.success('Éxito').set({ transition: 'flipy' }).show();
}
