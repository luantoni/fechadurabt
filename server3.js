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


app.get('/', function(req, res){
//	res.type('text/plain');
//	res.send('Laura travel');
	res.render('home');
});

app.get('/about', function(req, res){
//	res.type('text/plain');
//	res.send('Sobre Laura Travel');
	res.render('about');
});

app.post('/porta', function(req, res){
        var senha = req.body.senha;
//      var senha = req.body.senha;
        console.log('Recebido '+ senha);
        if (senha == "suasenha") {
                ///////////////////////////////////////////////
                console.log(new Date() + ': acende');
                fechadura.writeSync(0);
                console.log('espera');
                pause(500);
                console.log(new Date() + ': apaga');
                fechadura.writeSync(1);
                ///////////////////////////////////////////////
                res.redirect(303, '/aberta');
        } else {
                res.redirect(304, '/porta');
        }
});

// Minha página 404
app.use(function(req, res, next){
//	res.type('text/palin');
	res.status(404);
//	res.send('404 - Página não encontrada');
	res.render('404');
});


// Minha página 500
app.use(function(err, req, res, next){
	console.error(err.stack);
//	res.type('text/plain');
	res.status(500);
//	res.send('500 - Erro no servidor');
	res.render('500');
});


app.listen(app.get('port'), function(){
	console.log('Servidor escutando na porta ' + app.get('port'));
});

