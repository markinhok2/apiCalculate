class potencialService {
    constructor() { }

    calculate(urlParser) {
        var value = urlParser.query['valor'];
        var potencia = urlParser.query['potencia'];

        if (value) {
            const Potencial = require('../business/potencialBusiness.class');
            var fib = new Potencial();
            var result = fib.calculate(value, potencia);

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

module.exports = potencialService;