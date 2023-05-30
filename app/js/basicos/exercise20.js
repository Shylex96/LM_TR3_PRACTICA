let titulo = document.getElementById("titulo");

let clics = 0;
let tiempoEspera = 300; // tiempo en milisegundos para determinar si fue clic simple o doble clic
let timer = null;

titulo.addEventListener("click", function() {
    clics++;
    if (clics === 1) {
    timer = setTimeout(function() {
			alertify.alert('Evento','Se hizo un clic simple en el encabezado.');
    clics = 0;
    }, tiempoEspera);
    } else if (clics === 2) {
    clearTimeout(timer);
    alertify.alert('Evento', 'Se hizo doble clic en el encabezado.').set({ transition: 'flipy' }).show();
    clics = 0;
    }
});