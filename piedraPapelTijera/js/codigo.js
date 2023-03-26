// 1 papel, 2 piedra, 3 tijera
let usuario = 0;
let pc = 0;

let victorias = 0 // cuando gane el usuario
let derrotas = 0 // cuando gane el pc

// genera un número aletarorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min+1) + min);
}

// elige el elemento de acuerdo al número escogido
function eleccion(jugador) {
    const opciones = [[1,"✊"], [2,"📄"], [3,"✂️"]];
    let objeto = "";
    for (let i=0; i<opciones.length; i++) {
        num = opciones[i][0]; // el número de la opción
        if (num==jugador){
            objeto = opciones[i][1]; // el objeto del número
            return objeto;
        }
    }
    return "ELECCIÓN INCORRECTA"
}

// combate entre los 2 jugadores
function combate(usuario, pc) {

    while (victorias<3 && derrotas<3) {
        // estableciendo un número para cada jugador
        usuario = parseInt(prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera"));
        pc = aleatorio(1, 3);
        
        // asignando el elemento correspondiente al número
        alert("Escogiste " + eleccion(usuario));
        alert("El pc escogió " + eleccion(pc));

        // empate
        if (usuario==pc){
            alert("EMPATE");
        } // momentos donde gana el usuario
        else if ((usuario==1 && pc==3) || (usuario==3 && pc==2) || (usuario==2 && pc==1)) {
            victorias++;
            alert("GANAS");
        } // si el usuario no gana... 
        else {
            derrotas++;
            alert("PIERDES");
        }

        alert("Victorias " + victorias + "\nDerrotas " + derrotas);
    }

    alert("Ganaste " + victorias + " veces" + "\nPerdiste " + derrotas + " veces");
}

// combate
combate(usuario, pc);