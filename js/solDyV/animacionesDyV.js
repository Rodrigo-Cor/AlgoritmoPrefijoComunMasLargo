const primerBloque = (tl, elemento) => {
    tl.add({
        targets: [elemento],
        duration: 500,
        color: "#131313",
        loop: 1,
        easing: 'linear'
    }, '+=200')
};


const segundoBloque = (tl, elemento) => {
    tl.add({
        targets: [elemento],
        duration: 500,
        color: "#001B48",
        loop: 1,
        easing: 'linear'
    }, '+=200')
};

const sextoBloque = (tl, elemento) => {
    tl.add({
        targets: [elemento],
        duration: 500,
        color: "#02457A",
        loop: 1,
        easing: 'linear'
    }, '+=200')
};


const tercerBloque = (tl, elemento) => {
    tl.add({
        targets: [elemento],
        duration: 500,
        color: "#008000",
        loop: 1,
        backgroundColor: "#97CADB",
        easing: 'linear'
    }, '+=200')
};

const cuartoBloque = (tl, elemento1, elemento2) => {
    tl.add({
        targets: [elemento1],
        duration: 500,
        color: "#001B48",
        loop: 1,
        easing: 'linear'
    }, '+=200')
    tl.add({
        targets: [elemento2],
        duration: 500,
        color: "#ff0000",
        loop: 1,
        easing: 'linear'
    }, '+=200')
};

const quintoBloque = (tl, elemento) => {
    tl.add({
        targets: [elemento],
        duration: 500,
        loop: 1,
        backgroundColor: "#001B48",
        easing: 'linear'
    }, '+=200')
};




export { segundoBloque, tercerBloque, primerBloque, cuartoBloque, quintoBloque, sextoBloque};