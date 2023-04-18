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

const crearFunciones = (arregloPrefijos) => {
    let div1 = hacerunElemento("div", "", "Recursión Izquierda", "text-center");
    let contenedor1 = hacerunElemento("div", "commonIzq1", "commonPrefix(arr,0,1)", "text-center");
    let div12 = hacerunElemento("div", "commonUIzq1", "commonPrefixUtil(" + arregloPrefijos[0][0] + "," + arregloPrefijos[0][1] + ")", "text-center");

    let div2 = hacerunElemento("div", "", "Recursión Derecha", "text-center");
    let contenedor2 = hacerunElemento("div", "commonDer1", "commonPrefix(arr,2,3)", "text-center");
    let div22 = hacerunElemento("div", "commonUDer1", "commonPrefixUtil(" + arregloPrefijos[1][0] + "," + arregloPrefijos[1][1] + ")", "text-center");


    let div3 = hacerunElemento("div", "", "Recursión Principal", "text-center");
    let contenedor3 = hacerunElemento("div", "commonFin1", "commonPrefix(arr,0,3)", "text-center");
    let div32 = hacerunElemento("div", "commonUFin1", "commonPrefixUtil(" + arregloPrefijos[2][0] + "," + arregloPrefijos[2][1] + ")", "text-center");

    document.getElementById("funIzquierda").appendChild(div1);
    document.getElementById("funIzquierda").appendChild(contenedor1);
    document.getElementById("funIzquierda").appendChild(div12);

    document.getElementById("funDerecha").appendChild(div2);
    document.getElementById("funDerecha").appendChild(contenedor2);
    document.getElementById("funDerecha").appendChild(div22);

    document.getElementById("funFinal").appendChild(div3);
    document.getElementById("funFinal").appendChild(contenedor3);
    document.getElementById("funFinal").appendChild(div32);
}

const generarColumnasGenerico = (funcionesBloques, high, cadenas) => {
    let contenedorPrincipal = hacerunElemento("div", cadenas[2], "if(Low===High)", "text-center text-break")
    document.getElementById(cadenas[0]).appendChild(contenedorPrincipal);
    funcionesBloques.push(document.getElementById(cadenas[2]));

    let contenedor2 = hacerunElemento("div", "resFuncion" + high, cadenas[3], "text-break text-center")
    document.getElementById(cadenas[0]).appendChild(contenedor2);
    funcionesBloques.push(document.getElementById("resFuncion" + high));


}

const generarColumnas = (funcionesBloques, bloque) => {
    generarColumnasGenerico(funcionesBloques, bloque[2][2], ["izquierdaSimple1", "spanIzquierdo1", "contenedorIzquierdo1", "str1: " + bloque[2][0]])
    generarColumnasGenerico(funcionesBloques, bloque[3][2], ["izquierdaSimple2", "spanIzquierdo2", "contenedorIzquierdo2", "str2: " + bloque[3][0]])
    generarColumnasGenerico(funcionesBloques, bloque[5][2], ["derechaSimple1", "spanDerecha1", "contenedorDerecha1", "str1: " + bloque[5][0]])
    generarColumnasGenerico(funcionesBloques, bloque[6][2], ["derechaSimple2", "spanDerecha2", "contenedorDerecha2", "str2: " + bloque[6][0]])
    console.log(funcionesBloques);
}



const generarBloquePrincipal = (prefijoAnimaciones, bloque) => {
    let divide = document.getElementById("divide");
    let html =
        `<div class="container">
                <div class="d-flex justify-content-center">
                    <div id="bloqueDyC1" class="text-center">
                        <div class="p-1 text-break" id="palabraDyC1">arr=${bloque[0][0]}</div>
                        <div id="commonDyC1" class="text-break">commonPrefix(arr,${bloque[0][1]},${bloque[0][2]})</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 pe-2 mt-2">
                        <div id="bloqueDyC2" class="text-center">
                            <div class="text-break" id="palabraDyC2">arr=${bloque[1][0]}</div>
                            <div id="commonDyC12" class="text-break">commonPrefix(arr,${bloque[1][1]},${bloque[1][2]})</div>
                        </div>
                        <div class="row mt-2">
                            <div id="bloqueDyC3" class="col-6 text-center pe-4">
                                <div class="text-break" id="palabraDyC3">arr=${bloque[2][0]}</div>
                                <div id="commonDyC3" class="text-break">commonPrefix(arr,${bloque[2][1]},${bloque[2][2]})</div>
                            </div>
                            <div id="bloqueDyC4" class="col-6 text-center pe-4">
                                <div class="text-break" id="palabraDyC4">arr=${bloque[3][0]}</div>
                                <div id="commonDyC4" class="text-break">commonPrefix(arr,${bloque[3][1]},${bloque[3][2]})</div>
                            </div>
                        </div>
    
                    </div>

                    <div class="col-6 mt-2">
                        <div id="bloqueDyC5" class="text-center">
                            <div class="text-break" id="palabraDyC5">arr=${bloque[4][0]}</div>
                            <div id="commonDyC5" class="text-break">commonPrefix(arr,${bloque[4][1]},${bloque[4][2]})</div>
                        </div>
                        <div class="row mt-2">
                            <div id="bloqueDyC6" class="col-6 text-center pe-4">
                                <div class="text-break" id="palabraDyC6">arr=${bloque[5][0]}</div>
                                <div id="commonDyC6" class="text-break">commonPrefix(arr,${bloque[5][1]},${bloque[5][2]})</div>
                            </div>
                            <div id="bloqueDyC7" class="col-6 text-center pe-4">
                                <div class="text-break" id="palabraDyC7">arr=${bloque[6][0]}</div>
                                <div id="commonDyC7" class="text-break">commonPrefix(arr,${bloque[6][1]},${bloque[6][2]})</div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>`;
    divide.innerHTML = html;
    for (let i = 1; i <= 7; i++)
        prefijoAnimaciones.push(document.getElementById("bloqueDyC" + i));
    console.log(prefijoAnimaciones);

};

const comparacionesFinales = (comp) => {
    let contenedor = hacerunElemento("div", "", "Comparaciones Totales: " + comp, "text-center text-break");
    document.getElementById("comparacionesFinales").appendChild(contenedor);
}

const generarBloquesPrefijos = (prefijoBloques, bloque, id, iteracion) => {

    if (iteracion === 3) {
        let contenedor = hacerunElemento("div", "contDyV" + (id + 2), "", "container text-center");
        document.getElementById("recursionIzquierda").appendChild(contenedor);
    }

    if (iteracion === 6) {
        let contenedor = hacerunElemento("div", "contDyV" + (id + 2), "", "container text-center");
        document.getElementById("recursionDerecha").appendChild(contenedor);
    }

    if (iteracion === 7) {
        let contenedor = hacerunElemento("div", "contDyV" + (id + 2), "", "container text-center");
        document.getElementById("recursionFinal").appendChild(contenedor);
    }
    let i = 0;

    let contenedor2 = hacerunElemento("div", "DyVprefijos" + (id + 2), "", "");
    document.getElementById("contDyV" + (id + 2)).appendChild(contenedor2);

    let contenedor3 = hacerunElemento("div", "DyVCiclos" + (id + 2), "", "d-flex flex-wrap");
    document.getElementById("contDyV" + (id + 2)).appendChild(contenedor3);

    prefijoBloques.push(hacerunElemento("span", "pedazo1" + (id + 2), "str1: ", ""));
    let cadena1 = bloque[0].substring(0, bloque[5] - 1);

    for (i = 0; i < cadena1.length; i++) {
        prefijoBloques.push(hacerunElemento("span", "pedazo2" + (i + id + 2), cadena1[i] + "==" + cadena1[i], "me-2"));
        prefijoBloques.push(hacerunElemento("span", "pedazo3" + (i + id + 2), cadena1[i], ""));
        prefijoBloques.push(hacerunElemento("span", "pedazo6" + (i + id + 2), cadena1[i], ""));
    }

    if (((bloque[2][0][0]).includes("length") != true) && ((bloque[2][0][0]).includes("No hay préfijo común") === false))
        prefijoBloques.push(hacerunElemento("span", "spanCondicional" + (id + 2), bloque[2][0][0] + " != " + bloque[2][0][1], "me-2"));
    else
        prefijoBloques.push(hacerunElemento("span", "spanCondicional" + (id + 2), bloque[2][0], "me-2"));

    prefijoBloques.push(hacerunElemento("span", "pedazo4" + (id + 2), bloque[0].substring(bloque[5] - 1), ""));
    prefijoBloques.push(hacerunElemento("span", "pedazo5" + (id + 2), " vs str2: ", ""));
    prefijoBloques.push(hacerunElemento("span", "pedazo7" + (id + 2), bloque[1].substring(bloque[5] - 1), ""));


    prefijoBloques.push(hacerunElemento("div", "comparaciones" + (id + 2), "Comparaciones: " + bloque[4], ""));
    prefijoBloques.push(hacerunElemento("span", "DyVLCP" + (id + 2), "LCP: " + bloque[3], "p-1"));

    document.getElementById("DyVprefijos" + (id + 2)).appendChild(prefijoBloques[id - 1]);

    for (i = 1; i <= (3 * cadena1.length); i += 3)
        document.getElementById("DyVprefijos" + (id + 2)).appendChild(prefijoBloques[id + i]);

    document.getElementById("DyVprefijos" + (id + 2)).appendChild(prefijoBloques[id + i]);
    document.getElementById("DyVprefijos" + (id + 2)).appendChild(prefijoBloques[id + i + 1]);

    for (i = 1; i <= (3 * cadena1.length); i += 3)
        document.getElementById("DyVprefijos" + (id + 2)).appendChild(prefijoBloques[id + i + 1]);

    document.getElementById("DyVprefijos" + (id + 2)).appendChild(prefijoBloques[id + i + 2]);

    for (i = 0; i <= (3 * cadena1.length) + 2; i += 3)
        document.getElementById("DyVCiclos" + (id + 2)).appendChild(prefijoBloques[id + i]);

    document.getElementById("contDyV" + (id + 2)).appendChild(prefijoBloques[id + i + 1]);
    document.getElementById("contDyV" + (id + 2)).appendChild(prefijoBloques[id + i + 2]);
};

export { generarBloquePrincipal, generarBloquesPrefijos, generarColumnas, crearFunciones, comparacionesFinales };