const primerBloque = (tl, elemento) => {
    tl.add({
        targets: [elemento[0]],
        duration: 800,
        color: "#131313",
        loop: 1,
        easing: 'linear'
    }, '+=300')
    tl.add({
        targets: [elemento[1]],
        duration: 800,
        color: "#02457A",
        loop: 1,
        easing: 'linear'
    }, '+=300')

};

const segundoBloque = (tl, elemento) => {
    tl.add({
        targets: [elemento],
        duration: 800,
        color: "#001B48",
        loop: 1,
        easing: 'linear'
    }, '+=300')

};

const tercerBloqueB = (tl, elemento) => {
    tl.add({
        targets: [elemento[0]],
        duration: 800,
        color: "#131313",
        loop: 1,
        easing: 'linear'
    })
    tl.add({
        targets: [elemento[1]],
        duration: 800,
        color: "#ff0000",
        loop: 1,
        easing: 'linear'
    }, '-=800')

    tl.add({
        targets: [elemento[2]],
        duration: 800,
        color: "#001b48",
        loop: 1,
        easing: 'linear'
    }, '-=800')
};

const cuartoBloqueB = (tl, elemento) => {
    tl.add({
        targets: [elemento[0]],
        duration: 800,
        color: "#131313",
        loop: 1,
        easing: 'linear'
    },'+=800')
    tl.add({
        targets: [elemento[1]],
        duration: 500,
        color: "#001b48",
        backgroundColor: "#97cadb",
        loop: 1,
        easing: 'linear'
    }, '-=800')
}

const quintoBloqueB = (tl,elemento) =>{
    tl.add({
        targets: [elemento],
        duration: 800,
        color: "#131313",
        loop: 1,
        easing: 'linear'
    },'+=800')
}

const sextoBloqueB = (tl,elemento) =>{
    tl.add({
        targets: [elemento],
        duration: 800,
        color: "#001b48",
        loop: 1,
        easing: 'linear'
    },'+=800')
}

export {segundoBloque, primerBloque, tercerBloqueB, cuartoBloqueB, quintoBloqueB, sextoBloqueB};
