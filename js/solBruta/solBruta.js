import { segundoBloque, primerBloque, tercerBloqueB, cuartoBloqueB, quintoBloqueB, sextoBloqueB } from './animaciones.js';
import { generarBloqueInicial, generarBloquesIntermedios, generarBloquesPrefijos, generarComparacionesFinales } from './bloques.js';

let prefijoT = [], comparaciones = 0;
const longestCommonPrefix = (cadenas) => {
    let prefijo = cadenas[0];
    generarBloqueInicial(prefijoT, prefijo, cadenas);
    let i = 1, j = 3;
    for (i = 1; i < cadenas.length; i++) {
        let compIndividuales = 0;
        while (cadenas[i].indexOf(prefijo) != 0) {
            generarBloquesIntermedios(prefijoT, prefijo, j);
            j += 3;
            comparaciones += 3;
            compIndividuales += 3;
            prefijo = prefijo.substring(0, (prefijo.length) - 1);
        }
        if (cadenas[i].indexOf(prefijo) === 0 && (prefijo.length != 0)) {
            comparaciones++;
            compIndividuales++;
            generarBloquesPrefijos(prefijoT, prefijo, j, cadenas, i, compIndividuales);
            j += 6;
        }
        else {
            prefijo = "-1";
            comparaciones++;
            compIndividuales++;
            generarBloquesPrefijos(prefijoT, prefijo, j, cadenas, i, compIndividuales);
            break;
        }
    }
    generarComparacionesFinales(comparaciones);
};

const animarAlgoritmo = () => {
    let tl = anime.timeline({
        easing: 'easeOutExpo',
    });
    for (let y = 0; y < prefijoT.length; y++) {
        if ((prefijoT[y].id).startsWith("IbrutaContenedor")) 
        {
            segundoBloque(tl, prefijoT[y])
        }
        else if ((prefijoT[y].id).startsWith("BFcodigo")) {
            primerBloque(tl, [prefijoT[y], prefijoT[y + 1]])
            y++;
        }

        else if ((prefijoT[y].id).startsWith("recorte")) {
            tercerBloqueB(tl, [prefijoT[y], prefijoT[y + 1], prefijoT[y + 2]])
            y+=2;
        }
        
        else if((prefijoT[y].id).startsWith("ILCP")){
            cuartoBloqueB(tl,[prefijoT[y], prefijoT[y + 1]])
            y++;
        }

        else if((prefijoT[y].id).startsWith("Bcodi")){
            quintoBloqueB(tl,[prefijoT[y], prefijoT[y + 1]]);
            y++;
        }
    }   
    sextoBloqueB(tl,document.getElementById("comparacionesFinales2"));
}



export { longestCommonPrefix, animarAlgoritmo };