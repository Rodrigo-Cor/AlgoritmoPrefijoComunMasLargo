const hacerunElemento = (elemento, id, texto, clase) => {
    let contenedor = document.createElement(elemento);
    if (clase != "")
        contenedor.setAttribute("class", clase);
    if (id != "")
        contenedor.setAttribute("id", id);

    if (texto != "")
        contenedor.appendChild(document.createTextNode(texto));
    return contenedor;
};

const generarBloqueInicial = (prefijoT, prefijo, cadenasUsuario) => {
    prefijoT[0] = hacerunElemento("div", "IbrutaContenedor", "", "m-2");
    document.getElementById("animacionB").appendChild(prefijoT[0]);
    let s1 = hacerunElemento("span", "Itransformaciones", "LCP =" + prefijo, "text-break pe-4");
    let s2 = hacerunElemento("span", "Ipseudo", "Prefijo Inicial", "text-break text-center");
    document.getElementById("IbrutaContenedor").appendChild(s1);
    document.getElementById("IbrutaContenedor").appendChild(s2);

    let contenedor1 = hacerunElemento("div", "principal", "", "row m-2");
    document.getElementById("animacionB").appendChild(contenedor1);
    let s3 = hacerunElemento("div", "BFcodigo", "", "col-4");
    document.getElementById("principal").appendChild(s3);
    prefijoT[1] = hacerunElemento("div", "BFcodigo0", "for (i = 1; i < cadenas.length; i++)", "text-break text-center");
    prefijoT[2] = hacerunElemento("div", "final0", prefijo + " vs " + cadenasUsuario[1], "text-break text-center");
    document.getElementById("BFcodigo").appendChild(prefijoT[1]);
    document.getElementById("BFcodigo").appendChild(prefijoT[2]);

};

const generarBloquesIntermedios = (prefijoT, prefijo, j) => {
    let contenedor = hacerunElemento("div", "brutaContenedor" + j, "", "row");
    document.getElementById("animacionB").appendChild(contenedor);
    let transformaciones = hacerunElemento("div", "transformaciones" + j, "", "col-4 text-break");
    let codigo = hacerunElemento("div", "pseudo" + j, "", "col-4 text-break");
    document.getElementById("brutaContenedor" + j).appendChild(transformaciones);
    document.getElementById("brutaContenedor" + j).appendChild(codigo);

    let cont = hacerunElemento("div", "tCont" + j, "", "text-center");
    document.getElementById("transformaciones" + j).appendChild(cont);
    prefijoT[j] = hacerunElemento("span", "recorte" + j, prefijo.substring(0, prefijo.length - 1), "");
    prefijoT[j + 1] = hacerunElemento("span", "sobrante" + j, "", "text-decoration-line-through")
    prefijoT[j + 1].innerHTML = `<span class="ps-2">${prefijo.substring(prefijo.length - 1)}</span>
    <i class="fas fa-times"></i>`
    document.getElementById("tCont" + j).appendChild(prefijoT[j]);
    document.getElementById("tCont" + j).appendChild(prefijoT[j + 1]);

    prefijoT[j + 2] = hacerunElemento("div", "codigo" + j, "prefijo.substring(0, (prefijo.length) - 1)", "text-center")
    document.getElementById("pseudo" + j).appendChild(prefijoT[j + 2]);

};


const generarBloquesPrefijos = (prefijoT, prefijo, j, cadenasUsuario, i, comp) => {
    let comparaciones = hacerunElemento("div", "bcomp" + j, "", "row");
    document.getElementById("animacionB").appendChild(comparaciones);

    let contenedor = hacerunElemento("div", "brutaContenedor" + j, "", "row");
    document.getElementById("animacionB").appendChild(contenedor);
    let transformaciones = hacerunElemento("div", "transformaciones" + j, "", "col-4 text-break");
    document.getElementById("brutaContenedor" + j).appendChild(transformaciones);

    let contenedor1 = hacerunElemento("div", "BLCP" + j, "", "mb-3 col-4 text-break");
    document.getElementById("bcomp" + j).appendChild(contenedor1);
    prefijoT[j] = hacerunElemento("span", "ILCP" + j, "LCP =", "");
    prefijoT[j + 1] = hacerunElemento("span", "CLCP" + j, prefijo, "");
    document.getElementById("BLCP" + j).appendChild(prefijoT[j]);
    document.getElementById("BLCP" + j).appendChild(prefijoT[j + 1]);

    prefijoT[j + 2] = hacerunElemento("div", "Bcodi" + j, "cadenas[i].indexOf(prefijo) === 0", "mb-3 col-4 text-break text-center");
    prefijoT[j + 3] = hacerunElemento("div", "Bcomp" + j, "Comparaciones: " + comp, "mb-3 col-4 text-break text-center");

    document.getElementById("bcomp" + j).appendChild(prefijoT[j + 2]);
    document.getElementById("bcomp" + j).appendChild(prefijoT[j + 3]);

    if (prefijo != "-1") {
        if ((i + 1) != 4) {
            prefijoT[j + 4] = hacerunElemento("div", "BFcodigo" + j, "for (i = 1; i < cadenas.length; i++)", "text-center");
            prefijoT[j + 5] = hacerunElemento("div", "final" + j, prefijo + " vs " + cadenasUsuario[i + 1], "text-center");
            document.getElementById("transformaciones" + j).appendChild(prefijoT[j + 4]);
            document.getElementById("transformaciones" + j).appendChild(prefijoT[j + 5]);
        }
    }
};

const generarComparacionesFinales = (comparaciones) => {
    let divcomparaciones = hacerunElemento("div", "Fbcomp", "Comparaciones Totales: " + comparaciones, "text-break");
    document.getElementById("comparacionesFinales2").appendChild(divcomparaciones);
}

export { generarBloqueInicial, generarBloquesIntermedios, generarBloquesPrefijos, generarComparacionesFinales };