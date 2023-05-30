let matrizPrincipal = [];
let resultadoParrafo = document.getElementById("pintermedios6");

function calculoTiradas() {
    for (let i = 1; i <= 36000; i++) {
        let numero1 = Math.floor(Math.random() * 6 + 1);
        let numero2 = Math.floor(Math.random() * 6 + 1);
    
        let sumaTirada = numero1 + numero2;
    
        matrizPrincipal.push(sumaTirada);
    }

    resultadoParrafo.innerHTML = "Matriz resultante de 36.000 simulaciones de tirada: " + matrizPrincipal;

		let anclaArriba = document.getElementById("volverArriba");
		anclaArriba.style.display = 'block';
}

function reset() {
	matrizPrincipal = [];
	resultadoParrafo.innerHTML = "";
	let anclaArriba = document.getElementById("volverArriba");
	anclaArriba.style.display = 'none';
}
