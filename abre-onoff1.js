var Gpio = require('onoff').Gpio,
     led = new Gpio(4, 'out'),
     button = new Gpio(22, 'in', 'both');

function exit() {
	led.unexport();
	button.unexport();
	process.exit();
}

button.watch(function (err, value) {
	if (err) {
		throw err;
	}
	console.log(value);
	led.writeSync(value);

});

process.on('SIGINT', exit);

