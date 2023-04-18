import { animarAlgoritmo, longestCommonPrefix} from './solBruta.js';
const anime = require('animejs');

const recepcionF = document.querySelector("#recepcionF");
const contenedorFinal = document.querySelector("#BcontenedorFinal");
const bruta = document.getElementById("Bruta");

const cadenasUsuario = [];

const obtenerCadenas = () => {
    for (let i = 1; i <= 4; i++) {
        const cadena = document.getElementById("B" + i);
        cadenasUsuario.push(cadena.value);
    }
    const contenedorOculto = document.getElementById("BcontenedorOculto");
    contenedorOculto.setAttribute("class", "d-none");

}

const mostrarCadenas = () => {
    let html = '';
    cadenasUsuario.forEach((S, id) => {
        html += generarUnaLista(S, id);
    })
    contenedorFinal.innerHTML = html;
}

const generarUnaLista = (cadena, id) => `<li class="list-inline-item mt-2" id="S${id}">S${id + 1}: ${cadena} </li>`

const habilitarBoton = () => bruta.setAttribute("class", "btn btn-primary")

recepcionF.addEventListener("submit", (event) => {
    event.preventDefault();
    obtenerCadenas();
    mostrarCadenas();
    habilitarBoton();
});

bruta.addEventListener("click", (event) => {
    event.preventDefault();
    bruta.disabled = true;
    bruta.setAttribute("class","d-none")
    longestCommonPrefix(cadenasUsuario);
    animarAlgoritmo();
});


