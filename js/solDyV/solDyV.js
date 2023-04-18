import { generarBloquePrincipal, generarBloquesPrefijos, generarColumnas, crearFunciones, comparacionesFinales } from './bloquesD.js'
import { cuartoBloque, primerBloque, quintoBloque, segundoBloque, tercerBloque, sextoBloque } from './animacionesDyV.js'

let arregloDivisiones = [], prefijosAnimaciones = [], k = 1, conquerArreglo = [], id = 1, funcionesArreglo = [], contador=0;;
const arregloPrefijos = [], arreglo = [];
let iteracion = 0;
const commonPrefixUtil = (str1, str2) => {
    iteracion++;
    let result = "", caracteres = [], p = 0, h = 0, resultado = 0;
    let n1 = str1.length, n2 = str2.length;
    let a = 0, e = 0;
    for (a = 0, e = 0; a <= n1 - 1 && e <= n2 - 1; a++, e++) {
        resultado++; p++;

        if (str1[a] != str2[e]) {
            caracteres.push([str1[a], str2[e]]);
            break;
        }
        else
            h++;
        result += str1[a];
        if ((p === str1.length || p === str2.length))
            p++;
    }

    if (result.length === 0) {
        caracteres.push(["No hay préfijo común"]);
        if (str1.length === 0 && str2.length === 0)
            arregloPrefijos.push(["-1", "-1", caracteres, "-1", resultado + 1, p]);

        else if (str1.length === 0)
            arregloPrefijos.push(["-1", str2, caracteres, "-1", resultado + 1, p]);

        else if (str2.length === 0)
            arregloPrefijos.push([str1, "-1", caracteres, "-1", resultado + 1, p]);
        else
            arregloPrefijos.push([str1, str2, caracteres, "-1", resultado, p]);
    }
    else {
        if ((a === n1) && (e === n2)) {
            caracteres.push(["a<=str1.length && e<=str2.length"]);
            resultado += 3;
        }

        else if (a === n1) {
            caracteres.push(["a=str1.length"]);
            resultado++;
        }

        else if (e === n2) {
            caracteres.push(["e=str2.length"]);
            resultado++;
        }
        arregloPrefijos.push([str1, str2, caracteres, result, resultado, p]);
    }
    contador+=arregloPrefijos[k - 1][4];
    arreglo.push(id + 2);
    generarBloquesPrefijos(conquerArreglo, arregloPrefijos[k - 1], id, iteracion);
    k++; id += 7;
    id += h;
    id += h;
    id += h;
    return (result);
}

const commonPrefix = (arr, low, high) => {
    arregloDivisiones.push([arr.slice(low, high + 1), low, high]);
    if (low == high) {
        iteracion++;
        return (arr[low]);
    }
    if (high > low) {
        let mid = low + Math.floor((high - low) / 2);
        let str1 = commonPrefix(arr, low, mid);
        let str2 = commonPrefix(arr, mid + 1, high);
        return (commonPrefixUtil(str1, str2));
    }
    return null;
}

const empezarMovimientos = () => {
    const a1 = prefijosAnimaciones.slice(0, 4); //1
    const a2 = prefijosAnimaciones.slice(4); //4
    const b1 = funcionesArreglo.slice(0, 4); //2
    const b2 = funcionesArreglo.slice(4); //5
    const e1 = conquerArreglo.slice(0, arreglo[1] - arreglo[0]); //3
    e1.unshift(document.getElementById("funIzquierda"));
    const e2 = conquerArreglo.slice(arreglo[1] - arreglo[0], arreglo[2] - 3); //6
    e2.unshift(document.getElementById("funDerecha"));
    const e3 = conquerArreglo.slice(arreglo[2] - 3); //7
    e3.unshift(document.getElementById("funFinal"));
    const elementosFinales = a1.concat(b1, e1, a2, b2, e2, e3);
    elementosFinales.push(document.getElementById("comparacionesFinales"));
    console.log(elementosFinales)
    let c1 = e1.filter((elemento) => (elemento.id).includes("pedazo") && !(elemento.id).includes("pedazo2"));
    let c2 = e2.filter((elemento) => (elemento.id).includes("pedazo") && !(elemento.id).includes("pedazo2"));
    let c3 = e3.filter((elemento) => (elemento.id).includes("pedazo") && !(elemento.id).includes("pedazo2"));
    
    const arr = [c1, c2, c3];
    let tl = anime.timeline({
        easing: 'easeOutExpo',
    });
    let v = 0;
    for (let y = 0; y < elementosFinales.length; y++) {
        if ((elementosFinales[y].id).startsWith("pedazo1")) {
            primerBloque(tl, arr[v]);
            v++;
        }

        else if ((elementosFinales[y].id).startsWith("pedazo2") || (elementosFinales[y].id).startsWith("comparaciones") || 
            (elementosFinales[y].id).startsWith("bloqueDyC") || (elementosFinales[y].id).startsWith("resFuncion") ||
            (elementosFinales[y].id).startsWith("contenedorIzquierdo") || (elementosFinales[y].id).startsWith("contenedorDerecha"))
            segundoBloque(tl, elementosFinales[y]);


        else if ((elementosFinales[y].id).startsWith("pedazo3")) {
            tercerBloque(tl, [elementosFinales[y], elementosFinales[y + 1]]);
            y++;
        }

        else if ((elementosFinales[y].id).startsWith("spanCondicional"))
            cuartoBloque(tl, elementosFinales[y], [elementosFinales[y + 1], elementosFinales[y + 3]]);

        else if ((elementosFinales[y].id).startsWith("DyVLCP"))
            quintoBloque(tl, elementosFinales[y])

        else if ((elementosFinales[y].id).startsWith("funIzquierda") || (elementosFinales[y].id).startsWith("funDerecha")
            || (elementosFinales[y].id).startsWith("funFinal"))
            sextoBloque(tl, elementosFinales[y])

    }
}


const hacerMovimientosArbol = () => {
    generarBloquePrincipal(prefijosAnimaciones, arregloDivisiones);
    generarColumnas(funcionesArreglo, arregloDivisiones);
    crearFunciones(arregloPrefijos);
    comparacionesFinales(contador);
    empezarMovimientos();
    
}

export { commonPrefix, commonPrefixUtil, hacerMovimientosArbol };