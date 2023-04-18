import { commonPrefix, hacerMovimientosArbol } from "./solDyV.js";

const recepcion = document.querySelector("#recepcion");
const contenedorFinal = document.querySelector("#Final");
const dyv = document.getElementById("DyV")

const cadenasUsuario = [];

const obtenerCadenas = () => {
    for (let i = 1; i <= 4; i++) {
        const cadena = document.getElementById("D" + i);
        cadenasUsuario.push(cadena.value);
    }
    const contenedorOculto = document.getElementById("Oculto");
    contenedorOculto.setAttribute("class", "d-none");

};

const mostrarCadenas = () => {
    let listas = '';
    cadenasUsuario.forEach((S, id) => {
        listas += generarUnaLista(S, id);
    })
    contenedorFinal.innerHTML = listas;
};

const generarUnaLista = (cadena, id) => `<li class="list-inline-item mt-2" id="SD${id}">S${id + 1}: ${cadena} </li>`

const habilitarBoton = () => dyv.setAttribute("class", "btn btn-primary")

recepcion.addEventListener("submit", (event) => {
    event.preventDefault();
    obtenerCadenas();
    mostrarCadenas();
    habilitarBoton();
});


dyv.addEventListener("click", (event) => {
    event.preventDefault();
    dyv.setAttribute("class", "d-none")
    commonPrefix(cadenasUsuario, 0, 3);
    hacerMovimientosArbol();
})




