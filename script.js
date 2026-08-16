const fotos = [

    "Fotos/Lima/2026-07-23_V1.jpeg",

    "Fotos/Lima/2026-07-30_V1.jpeg"

];


let indice = 0;


function mostrarFoto() {

    const imagen = document.getElementById("fotoViaje");

    const contador = document.getElementById("contador");


    imagen.src = fotos[indice];


    contador.textContent =
        `${indice + 1} / ${fotos.length}`;

}


function fotoSiguiente() {

    indice++;


    if (indice >= fotos.length) {

        indice = 0;

    }


    mostrarFoto();

}


function fotoAnterior() {

    indice--;


    if (indice < 0) {

        indice = fotos.length - 1;

    }


    mostrarFoto();

}