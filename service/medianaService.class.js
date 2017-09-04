class medianaService {
    constructor() { }

    calculate(urlParser) {

        var value = urlParser.query['valor'].split(',');

        if (value) {
            const Mediana = require('../business/medianaBusiness.class');
            var med = new Mediana();
            var result = med.calculate(value);

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

module.exports = medianaService;