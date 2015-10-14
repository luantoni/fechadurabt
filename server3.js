// Fechadura elétrica
// Paulo Santos Abreu
// Outubro de 2015 - versão 1
//
var express = require('express');
var http = require('http');
var querystring = require('querystring');
var util = require('util');
var form = require('fs').readFileSync('form.html');
var app = express();


// set up handlebars view engine
var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 8080);
app.use(express.static(__dirname + '/public'));

// Carrega middleware body-parser
// app.use(require('body-parser')()); --> deprecated in Express 4.0
// De acordo com:
// http://stackoverflow.com/questions/5710358/how-to-get-post-a-query-in-express-js-node-js
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
	extended: true
}));

var Gpio = require('onoff').Gpio // GPIO via Javascript

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

// a home page para abrir a porta
app.get('/porta', function(req, res){
	res.render('home');
});

// mostra que a porta foi aberta
app.get('/aberta', function(req, res){
	res.render('303');
});

// mostra a página de 'about'
app.get('/about', function(req, res){
	res.render('about');
});

// captura a senha e decide o que fazer
app.post('/porta', function(req, res){
	var senha = req.body.senha;
	console.log('Recebido '+ senha);
	if (senha == "senha") { // escolha a senha para abrir a porta
		///////////////////////////////////////////////
		console.log(new Date() + ': liga rele');
		fechadura.writeSync(0);
		console.log('espera');
		pause(500);
		console.log(new Date() + ': desliga rele');
		fechadura.writeSync(1);
		///////////////////////////////////////////////
		res.redirect(303, '/aberta');
	} else {
		res.redirect(304, '/porta');
	}
});

// Minha página 404
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});


// Minha página 500
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});


app.listen(app.get('port'), function(){
	console.log('Servidor escutando na porta ' + app.get('port'));
});

