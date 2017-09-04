class fibonacciService {
    constructor() { }

    calculate(urlParser) {
        var value = urlParser.query['valor'];

        if (value) {
            const Fibonacci = require('../business/fibonacciBusiness.class');
            var fib = new Fibonacci();
            var result = fib.calculate(value);

            var returnValue = {
                operacao: urlParser.pathname,
                parametro: value,
                resultado: result
            };

            var returnJson = JSON.stringify(returnValue);
            return returnJson;
        }
    }
}

module.exports = fibonacciService;