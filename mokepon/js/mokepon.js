const mascotas = ["hipodoge", "capipepo", "ratigueya"];
const ataques = ["FUEGO", "AGUA", "TIERRA"];
let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
    // inicia el juego

    // selecciono el botón con el id boton-mascota
    let botonMascota = document.getElementById("boton-seleccionar-mascota");
    // escucho sus eventos, especificando el click, y le asigno una función
    botonMascota.addEventListener("click", seleccionarMascotaJugador);

    // guardo los botones de ataque
    let botonFuego = document.getElementById("boton-fuego");
    let botonAgua = document.getElementById("boton-agua");
    let botonTierra = document.getElementById("boton-tierra");
    // escuchadores de eventos para los botones de ataque
    botonFuego.addEventListener("click", ataqueFuego);
    botonAgua.addEventListener("click", ataqueAgua);
    botonTierra.addEventListener("click", ataqueTierra);
}

// ---------------------- SELECCIÓN DE MASCOTAS ------------------------------

function seleccionarMascotaJugador() {
    // lanza una alerta de acuerdo a la mascota seleccionada

    let seleccion = false;
    let spanMascotaJugador = document.getElementById("mascota-jugador");
    for (mascota of mascotas) {
        if (document.getElementById(mascota).checked) {
            seleccion = true;
            spanMascotaJugador.innerHTML = mascota.toUpperCase(); // cambio el contenido de la página, exactamente donde sale la mascota elegida por el jugador
        }
    }

    // si el usuario oprime el botón sin haber seleccionado mascota
    if (!seleccion) {
        alert("No has seleccionado ninguna mascota")
    } // si seleccionó una mascota correctamente 
    else {
        seleccionarMascotaEnemigo();
    }
}

function aleatorio(min, max) {
    // genera un número aletarorio entre un rango

    return Math.floor(Math.random() * (max - min+1) + min);
}

function seleccionarMascotaEnemigo() {
    // escoge aletaroriamente la mascota del enemigo

    let indiceAleatorio = aleatorio(0,2); // genero un índice aletorio entre 0 y 2 (inclusives)
    let mascota = mascotas[indiceAleatorio]; // busco la mascota con el índice

    let spanMascotaEnemigo = document.getElementById("mascota-enemigo"); // obtengo el span de la mascota del enemigo
    spanMascotaEnemigo.innerHTML = mascota.toUpperCase(); // lo modifico con la mascota aleatoria
} 

// ---------------------- SELECCIÓN DE ATAQUES ------------------------------

function ataqueFuego() {
    ataqueJugador = "FUEGO 🔥";
    let spanAtaqueJugador = document.getElementById("ataque-jugador");
    spanAtaqueJugador.innerHTML = ataqueJugador;
    seleccionarAtaqueEnemigo();
}

function ataqueAgua() {
    ataqueJugador = "AGUA 💧";
    let spanAtaqueJugador = document.getElementById("ataque-jugador");
    spanAtaqueJugador.innerHTML = ataqueJugador;
    seleccionarAtaqueEnemigo();
}

function ataqueTierra() {
    ataqueJugador = "TIERRA 🌱";
    let spanAtaqueJugador = document.getElementById("ataque-jugador");
    spanAtaqueJugador.innerHTML = ataqueJugador;
    seleccionarAtaqueEnemigo();
}

/* ME GUSTARÍA PODER REDUCIR EL CÓDIGO REPETIDO DE LOS ATAQUES, PERO NO ME FUNCIONA...
function atacarJugador(ataque) {
    ataqueJugador = ataque;
    let spanAtaqueJugador = document.getElementById("ataque-jugador");
    spanAtaqueJugador.innerHTML = atacarJugador;
    ataqueEnemigo
}
*/

function seleccionarAtaqueEnemigo() {
    let indiceAleatorio = aleatorio(0,2);
    let ataqueEnemigo =  ataques[indiceAleatorio];

    spanAtaqueEnemigo = document.getElementById("ataque-enemigo");
    spanAtaqueEnemigo.innerHTML = ataqueEnemigo;

}


// evento para cuando cargue todo el HTML (página)
// iniciar el juego
window.addEventListener("load", iniciarJuego)