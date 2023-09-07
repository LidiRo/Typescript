interface ObjectA { 
    [a: string]: { сvalue: number | string | undefined | ObjectA } | undefined;
}

function summ(a: ObjectA) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === undefined || elem === undefined || elem.сvalue === undefined) return 2021;
        if (typeof elem.сvalue === 'string') return +elem.сvalue || 2021;
        if (typeof elem.сvalue === 'number') return elem.сvalue;
        if (typeof elem.сvalue === 'object') return summ(elem.сvalue);
        return 2021;
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}

console.log(summ({
    hello: {сvalue: 1},
    world: {
        сvalue:
            { yay: { сvalue: "2" } }
    }
}));

console.log(summ({
    hello: {сvalue: 1},
    world: undefined
}));