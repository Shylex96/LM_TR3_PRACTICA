let avisoDNI = alert("Rellene el DNI.");

function limpiarDNI() {
  document.getElementById("dni").value = "";
  document.getElementById("letra").value = "";
  window.event.preventDefault();
}

function validarDNI() {
  window.event.preventDefault();

  let dni = document.getElementById("dni").value;
  let letra = document.getElementById("letra").value.toUpperCase();
  const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

  if (dni < 0 || dni > 99999999) {
    document.getElementById("resultado").innerHTML = "El número indicado no es válido.";
  } else if (!/^[A-Z]$/.test(letra)) {
    document.getElementById("resultado").innerHTML = "El carácter introducido como letra no es una letra.";
  } else {
    let resto = dni % 23;
    let operacionLetra = letras[resto];
    if (letra !== operacionLetra) {
      document.getElementById("resultado").innerHTML = "La letra que ha indicado no corresponde con el número.";
    } else {
      document.getElementById("resultado").innerHTML = "El número y la letra de DNI son correctos.";
    }
  }
}
