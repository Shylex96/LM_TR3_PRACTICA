let fechaNacimiento;

fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (DD/MM/AAAA):");
if (fechaNacimiento === null) {
	document.getElementById("pbasicos19").innerHTML = ("No se ha introducido ninguna fecha.");
	alertify.error('No se introdujo fecha').set({ transition: 'flipy' }).show();
}

if (fechaNacimiento) {
	let partesFecha = fechaNacimiento.split("/");
	let fechaNacimientoObj = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);

	if (
		isNaN(fechaNacimientoObj.getTime()) ||
		partesFecha.length !== 3 ||
		partesFecha[0].length !== 2 ||
		partesFecha[1].length !== 2 ||
		partesFecha[2].length !== 4 ||
		partesFecha[2] > 2022 ||
		partesFecha[1] > 12 ||
		partesFecha[0] > 31
	) {
		document.getElementById("pbasicos19").innerHTML = "El formato de fecha introducido no es válido.";
		alertify.alert('Error', 'El formato de fecha introducido no es válido.').set('movable', false);
		alertify.error('Error').set({ transition: 'flipy' }).show();
	} else {
		let fechaActual = new Date();
		let edadUsuario = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();

		if (
			fechaNacimientoObj.getMonth() > fechaActual.getMonth() ||
			(fechaNacimientoObj.getMonth() === fechaActual.getMonth() &&
				fechaNacimientoObj.getDate() > fechaActual.getDate())
		) {
			edadUsuario--;
		}

		document.getElementById("pbasicos19").innerHTML = "Actualmente tienes " + edadUsuario + " años.";
		alertify.success('Éxito').set({ transition: 'flipy' }).show();
	}
}
