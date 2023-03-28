function iniciarJuego() {
    // selecciono el botón con el id boton-mascota
    let botonMascota = document.getElementById("boton-seleccionar-mascota");
    // escucho sus eventos, especificando el click, y le asigno una función
    botonMascota.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    alert("Seleccionaste tu mascota")
}



// evento para cuando cargue todo el HTML (página)
// iniciar el juego
window.addEventListener("load", iniciarJuego)