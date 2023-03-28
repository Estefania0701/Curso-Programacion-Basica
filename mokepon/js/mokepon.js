const mascotas = ["HIPODOGE", "CAPIPEPO", "RATIGUEYA"];
const ataques = ["FUEGO 🔥", "AGUA 💧", "TIERRA 🌱"];
let mascotaJugador;
let mascotaEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
let ataqueJugador;
let ataqueEnemigo;
let resultadoCombate;

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
        if (document.getElementById(mascota.toLowerCase()).checked) {
            seleccion = true;
            mascotaJugador = mascota
            spanMascotaJugador.innerHTML = mascotaJugador; // cambio el contenido de la página, exactamente donde sale la mascota elegida por el jugador
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
    mascotaEnemigo = mascotas[indiceAleatorio]; // busco la mascota con el índice

    let spanMascotaEnemigo = document.getElementById("mascota-enemigo"); // obtengo el span de la mascota del enemigo
    spanMascotaEnemigo.innerHTML = mascotaEnemigo; // lo modifico con la mascota aleatoria
} 

// ---------------------- SELECCIÓN DE ATAQUES ------------------------------

function ataqueFuego() {
    if (mascotaJugador) {
        ataqueJugador = "FUEGO 🔥";
        seleccionarAtaqueEnemigo();
    } else {
        alert("¡No has seleccionado una mascota!");
    }
}

function ataqueAgua() {
    if (mascotaJugador) {
        ataqueJugador = "AGUA 💧";
        seleccionarAtaqueEnemigo();
    } else {
        alert("¡No has seleccionado una mascota!");
    }
}

function ataqueTierra() {
    if (mascotaJugador) {
        ataqueJugador = "TIERRA 🌱";
        seleccionarAtaqueEnemigo();
    } else {
        alert("¡No has seleccionado una mascota!");
    }
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
    // selecciona un ataque aleatorio del enemigo

    let indiceAleatorio = aleatorio(0,2);
    ataqueEnemigo =  ataques[indiceAleatorio];

    combate();
    crearMensajes();
}

function combate() {
    jugador = ataqueJugador.slice(0, -3);
    enemigo = ataqueEnemigo.slice(0, -3);

    if (jugador==enemigo) {
        resultadoCombate = "EMPATE";
    } 
    else if ((jugador=="FUEGO" && enemigo=="TIERRA") || (jugador=="TIERRA" && enemigo=="AGUA") || (jugador=="AGUA" && enemigo=="FUEGO")) {
        resultadoCombate = "GANASTE";
    } 
    else {
        resultadoCombate = "PERDISTE";
    }

}

function crearMensajes() {
    // imprimer nuevos mensajes con los ataques

    let parrafo = document.createElement("p"); // creo un párrago
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + " y la mascota del enemigo atacó con " + ataqueEnemigo + " ---> " + resultadoCombate; // le doy contenido al párrafo

    sectionMensajes = document.getElementById("mensajes"); // obtengo la sección de Mensajes
    sectionMensajes.appendChild(parrafo); // inserto el párrafo en el DOM
}



// evento para cuando cargue todo el HTML (página)
// iniciar el juego
window.addEventListener("load", iniciarJuego)