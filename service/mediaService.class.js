class mediaService {
    constructor() { }

    calculate(urlParser) {

        var value = urlParser.query['valor'].split(',');

        if (value) {
            const Media = require('../business/mediaBusiness.class');
            var med = new Media();
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

module.exports = mediaService;