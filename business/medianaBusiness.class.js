class medianaBusiness {

    constructor() { }

    calculate(value) {

        value.sort(function (a, b) { return a - b; });
        var half = Math.floor(value.length / 2);
        var val = Number(value[half - 1]) + Number(value[half]);

        if (value.length % 2)
            return value[half];
        else
            return (val / 2);
    }
}

module.exports = medianaBusiness;
