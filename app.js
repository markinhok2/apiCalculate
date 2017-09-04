var http = require('http');
var url = require('url');
var port = '3000';
var route = '/api/calculadora/v1';

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    var urlParser = url.parse(request.url, true);

    switch (urlParser.pathname) {
        case route:
            response.write('<h1>Página principal</h1>');
            break;
        case route + '/fatorial':
            const fatorialService = require('./service/fatorialService.class.js')
            var result = new fatorialService().calculate(urlParser);
            response.write(result);
            break;
        case route + '/fibonacci':
            const fibonacciService = require('./service/fibonacciService.class.js')
            var result = new fibonacciService().calculate(urlParser);
            response.write(result);
            break;
        case route + '/potencial':
            const potencialService = require('./service/potencialService.class.js')
            var result = new potencialService().calculate(urlParser);
            response.write(result);
            break;
        case route + '/media':
            const mediaService = require('./service/mediaService.class.js')
            var result = new mediaService().calculate(urlParser);
            response.write(result);
            break;
        case route + '/mediana':
            const medianaService = require('./service/medianaService.class.js')
            var result = new medianaService().calculate(urlParser);
            response.write(result);
            break;
        default:
            response.write('<h1>Página não encontrada...</h1>');
            break;
    }
    response.end();
});

server.listen(port, function () { });
console.log('Servidor iniciado em localhost:' + port);