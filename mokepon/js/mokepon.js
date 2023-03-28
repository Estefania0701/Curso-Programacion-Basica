function iniciarJuego() {
    // selecciono el botón con el id boton-mascota
    let botonMascota = document.getElementById("boton-seleccionar-mascota");
    // escucho sus eventos, especificando el click, y le asigno una función
    botonMascota.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    // lanza una alerta de acuerdo a la mascota seleccionada
    let mascotas = ["hipodoge", "capipepo", "ratigueya"];
    let seleccion = 0
    for (mascota of mascotas) {
        if (document.getElementById(mascota).checked) {
            alert("Seleccionaste a " + mascota.toUpperCase());
            seleccion = 1;
        }
    }
    // si el usuario oprime el botón sin haber seleccionado mascota
    if (seleccion == 0) {
        alert("No has seleccionado ninguna mascota")
    }
}




// evento para cuando cargue todo el HTML (página)
// iniciar el juego
window.addEventListener("load", iniciarJuego)