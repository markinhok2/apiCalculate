class fatorialBusiness {

    constructor() { }

    calculate(value) {
        var fatorial = value;
        var i;

        for (i = value - 1; i > 1; i--) {
            fatorial *= i;
        }
        return fatorial;
    }
}

module.exports = fatorialBusiness;