class fatorialService {
    constructor() { }

    calculate(urlParser) {
        var value = urlParser.query['valor'];

        if (value) {
            const Fatorial = require('../business/fatorialBusiness.class');
            var fat = new Fatorial();
            var result = fat.calculate(value);

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

module.exports = fatorialService;