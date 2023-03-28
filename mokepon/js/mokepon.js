function iniciarJuego() {
    // selecciono el botón con el id boton-mascota
    let botonMascota = document.getElementById("boton-seleccionar-mascota");
    // escucho sus eventos, especificando el click, y le asigno una función
    botonMascota.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    // lanza una alerta de acuerdo a la mascota seleccionada
    let mascotas = ["hipodoge", "capipepo", "ratigueya"];
    let seleccion = false
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    for (mascota of mascotas) {
        if (document.getElementById(mascota).checked) {
            alert("Seleccionaste a " + mascota.toUpperCase());
            seleccion = true;
            spanMascotaJugador.innerHTML = mascota.toUpperCase(); // cambio el contenido de la página, exactamente donde sale la mascota elegida por el jugador
        }
    }
    // si el usuario oprime el botón sin haber seleccionado mascota
    if (!seleccion) {
        alert("No has seleccionado ninguna mascota")
    }
}




// evento para cuando cargue todo el HTML (página)
// iniciar el juego
window.addEventListener("load", iniciarJuego)