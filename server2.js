var http = require('http');
var querystring = require('querystring');
var util = require('util');
var form = require('fs').readFileSync('form.html');
// Para rodar uma rotina em Python
var exec = require("child_process").exec;
var Gpio = require('onoff').Gpio

// Ao invés de inicializarmos com 'out'
// usamos 'high' que é uma variante
// de 'out' que inicializa c porta com
// o valor 'high' (que em nosso caso não liga
// o relê).
fechadura = new Gpio(4, 'high');

function pause(miliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= miliseconds) { /* faça nada */ }
}

http.createServer(function (request, response) {
	if (request.method === "POST") {
		var postData = '';
		request.on('data', function (chunck) {
			postData += chunck;
		}).on('end', function() {
			var postDataObject = querystring.parse(postData);
			console.log('User Posted:\n', postData);
			var senha = postDataObject.userinput1;
			console.log("senha = " + senha);
			if (senha == "abre") {
			///////////////////////////////////////////////
			console.log(new Date() + ': acende');
			fechadura.writeSync(0);
			console.log('espera');
			pause(1000);
			console.log(new Date() + ': apaga');
			fechadura.writeSync(1);
			///////////////////////////////////////////////
			}
			response.end('You Posted:\n' + util.inspect(postDataObject));
		});
	}
	if (request.method === "GET") {
		response.writeHead(200, {'Content-Type':  'text/html'});
		response.end(form);
	}
}).listen(8080);
console.log('Listening on port 8080');

