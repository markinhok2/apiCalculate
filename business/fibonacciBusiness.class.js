class fibonacciBusiness {

    constructor() { }

    calculate(value) {
        var a = 0;
        var b = 1;
        var i;

        for (i = 0; i < value; i++) {
            var temp = a;
            a = b;
            b = temp + b;
        }
        return a;
    }
}

module.exports = fibonacciBusiness;