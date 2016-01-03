Controle de Fechadura Elétrica com Raspberry Pi
===

Introdução
---

Nesse projeto um Raspberry Pi é utilizado para controlar a abertura de 
uma fechadura elétrica.

Uma fechadura elétrica é uma fechadura de atuação mecânica que usa um solenóide
para acionar sua abertura. É muito comum em portões onde a abertura é feita 
pelo interfone ou por um botão.

Nesse vídeo explico como funciona esse tipo de fechadura:

https://www.youtube.com/watch?v=lYu4_FXZVwM

Para controlar a fechadura com um Raspberry Pi vamos usar um relê para fazer
o papel de "botão" acionador e controlar o relê através de uma porta de I/O
do Raspberry Pi.

Escolhi usar [node.js] [1] para rodar a aplicação web que dará acesso ao controle
do relê. E para ficar no mundo Javascript usei a biblioteca [onoff] [2] para
controlar a interface GPIO do Raspberry Pi.


Conexões:
---

A figura abaixo indica as conexões entre o Raspberry Pi e o módulo do relê.

(inserir figura)



Alguns links:
---

Configurando um IP estático:

https://www.modmypi.com/blog/tutorial-how-to-give-your-raspberry-pi-a-static-ip-address

http://www.rpiblog.com/2012/08/bluetooth-pairing-of-raspberry-pi-with.html

http://web.inter.nl.net/users/hanscees/bluezhowto.html#whatis

http://www.heatxsink.com/entry/how-to-pair-a-bluetooth-device-from-command-line-on-linux


Como parea iPhone com RPi via bluetooth usando linha de comando:
---

http://www.wolfteck.com/projects/raspi/iphone/

Aplicativo para conectar iPhone com RPi (via Wi-Fi):
---

https://github.com/blynkkk/blynk-library/blob/master/docs/Platforms.md#linux-raspberry-pi

Comandando as portas GPIO via Python:
---

http://raspi.tv/2013/rpi-gpio-basics-5-setting-up-and-using-outputs-with-rpi-gpio

Abrindo uma porta de garagem com RPi (em Wi-Fi):
---

http://www.driscocity.com/idiots-guide-to-a-raspberry-pi-garage-door-opener/

Que usa o WebIOPi:

http://webiopi.trouch.com/index.html

WebIOPi que funciona?

http://brian2012class.nfshost.com/wp-content/uploads/2015/04/webiopi.pdf

Veja Class 35:

http://brian2012class.nfshost.com/where-are-we/


Projeto que usa node.js com Python:

http://tylerwowen.github.io/pisensors/

Script usando Web.py e GPIO!

http://newfreshpeace.blogspot.com/2013/01/raspberry-pi-gpio-web-interface-using.html

Chamada de função que funcionou:

    exec  = require('child_process').exec

https://nodejs.org/docs/v0.2.4/api.html

Lendo pinos com gpio:
---

http://raspberry.io/projects/view/reading-and-writing-from-gpio-ports-from-python/

http://raspi.tv/2013/how-to-use-interrupts-with-python-on-the-raspberry-pi-and-rpi-gpio-part-2

http://raspberrywebserver.com/gpio/using-interrupt-driven-gpio.html

Pinagem do RaspberryPi
---

http://www.hobbytronics.co.uk/raspberry-pi-gpio-pinout


Referências:
---

[1]: http://weworkweplay.com/play/raspberry-pi-nodejs/ (Versão do node.js pré-compilada para Raspberry Pi)
[2]: https://www.npmjs.com/package/onoff 
[3]: 
