var http = require('http');
var querystring = require('querystring');
var util = require('util');
var form = require('fs').readFileSync('form.html');
// Para rodar uma rotina em Python
var exec = require("child_process").exec;

http.createServer(function (request, response) {
	if (request.method === "POST") {
		var postData = '';
		request.on('data', function (chunck) {
			postData += chunck;
		}).on('end', function() {
			var postDataObject = querystring.parse(postData);
			console.log('User Posted:\n', postData);
			response.end('You Posted:\n' + util.inspect(postDataObject));
			///////////////////////////////////////////////
			// Coloque aqui o script Python a ser executado
			var abre = exec('./sudo-abre.sh',
				function (error, stdout, stderr) {
					console.log('stdout:  ' + stdout);
					console.log('stderr: ' + stderr);
					if (error !== null) {
						console.log('exec error:  ' + error);
					}	
				});
			///////////////////////////////////////////////
		});
	}
	if (request.method === "GET") {
		response.writeHead(200, {'Content-Type':  'text/html'});
		response.end(form);
	}
}).listen(8080);
console.log('Listening on port 8080');

