class mediaBusiness {

    constructor() { }

    calculate(value) {

        var sum = 0;
        for (var i = 0; i < value.length; i++) {
            sum += parseInt(value[i], 10);
        }

        var avg = sum / value.length;
        return avg;
    }
}

module.exports = mediaBusiness;