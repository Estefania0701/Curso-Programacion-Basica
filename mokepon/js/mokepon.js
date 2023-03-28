function seleccionarMascotaJugador() {
    alert("Seleccionaste tu mascota")
}

// selecciono el botón con el id boton-mascota
let botonMascota = document.getElementById("boton-seleccionar-mascota");
// escucho sus eventos, especificando el click, y le asigno una función
botonMascota.addEventListener("click", seleccionarMascotaJugador);