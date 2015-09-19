// Carrega a biblioteca
var gpio = require('rpi-gpio');

// Ajusta para o modo de referência BCM onde
// indicaremos os pinos pelo número GPIO ao
// invés da contagem física do conector.
gpio.setMode(gpio.MODE_BCM);

gpio.on('export', function(channel) {
	console.log('Channel set: ' + channel);
});

// Ajusta o pino para modo de escrita
// e chama a função para escrever valor.
gpio.setup(4, gpio.DIR_OUT, writeToPin);


function writeToPin() {
	gpio.write(4, 1, function(err) {
		if (err) {
			console.log('Err = ' + err);
		} else {
			console.log('ligado');
		}
	});
}

