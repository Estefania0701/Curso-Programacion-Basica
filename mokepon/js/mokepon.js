const mascotas = ["HIPODOGE", "CAPIPEPO", "RATIGUEYA"];
const ataques = ["FUEGO 🔥", "AGUA 💧", "TIERRA 🌱"];
let mascotaJugador;
let mascotaEnemigo;
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    // inicia el juego

    // escondo la sección de ataque
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "none"; // para que se oculte toda la sección

    // escondo la sección de reiniciar
    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "none"; // para que se oculte toda la sección

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
    
    // ajusto el botón de reiniciar
    let botonReiniciar = document.getElementById("boton-reiniciar");
    botonReiniciar.addEventListener("click", reiniciarJuego);
}

// --------------------- SELECCIÓN DE MASCOTAS ------------------------------

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

        // oculto la sección seleccionar mascota
        let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
        sectionSeleccionarMascota.style.display = "none";
        
        // ahora muestro la sección de ataque
        let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
        sectionSeleccionarAtaque.style.display = "block";
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
    ataqueJugador = "FUEGO 🔥";
    seleccionarAtaqueEnemigo();
}

function ataqueAgua() {
    ataqueJugador = "AGUA 💧";
    seleccionarAtaqueEnemigo();
}

function ataqueTierra() {
    ataqueJugador = "TIERRA 🌱";
    seleccionarAtaqueEnemigo();
}

function seleccionarAtaqueEnemigo() {
    // selecciona un ataque aleatorio del enemigo

    let indiceAleatorio = aleatorio(0,2);
    ataqueEnemigo =  ataques[indiceAleatorio];

    combate();
}

// ------------------------ COMBATE JUGADORES ------------------------------

function combate() {

    let resultadoCombate;

    jugador = ataqueJugador.slice(0, -3);
    enemigo = ataqueEnemigo.slice(0, -3);

    if (jugador==enemigo) {
        resultadoCombate = "EMPATE"; 
    } 
    else if ((jugador=="FUEGO" && enemigo=="TIERRA") || (jugador=="TIERRA" && enemigo=="AGUA") || (jugador=="AGUA" && enemigo=="FUEGO")) {
        resultadoCombate = "GANASTE";
        vidasEnemigo--;
    } 
    else {
        resultadoCombate = "PERDISTE";
        vidasJugador--;
    }

    crearMensajes(resultadoCombate);
    revisarVidas();
}

function revisarVidas() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    spanVidasJugador.innerHTML = vidasJugador;
    spanVidasEnemigo.innerHTML = vidasEnemigo;

    if (vidasEnemigo == 0) {
        mostrarResultado("¡Ganaste el combate! ¡FELICITACIONES! 🏆");
        deshabilitarAtaques();
    } else if (vidasJugador == 0) {
        mostrarResultado("¡OH, NO! Has perdido el combate 😞");
        deshabilitarAtaques();
    }
}

function crearMensajes(mensaje) {
    // imprimer nuevos mensajes con los ataques

    let parrafo = document.createElement("p"); // creo un párrafo
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + " y la mascota del enemigo atacó con " + ataqueEnemigo + " ---> " + mensaje; // le doy contenido al párrafo

    sectionMensajes = document.getElementById("mensajes"); // obtengo la sección de Mensajes
    sectionMensajes.appendChild(parrafo); // inserto el párrafo en el DOM
}

// -------------------------- FIN DEL COMBATE --------------------------------

function mostrarResultado(mensaje) {
    let parrafo = document.createElement("p"); // creo un párrafo
    parrafo.innerHTML = mensaje;

    sectionMensajes = document.getElementById("mensajes");
    sectionMensajes.appendChild(parrafo);
}

function deshabilitarAtaques() {
    let botonFuego = document.getElementById("boton-fuego");
    let botonAgua = document.getElementById("boton-agua");
    let botonTierra = document.getElementById("boton-tierra");
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;

    // ahora muestro la sesión reiniciar
    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
    location.reload();
}


// evento para cuando cargue todo el HTML (página)
// iniciar el juego
window.addEventListener("load", iniciarJuego)


// quitar la funcionalidad de desahibilitar seleccionar mascota
// en su lugar, esconder la sección luego de haber escogido mascota