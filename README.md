# fechadurabt
Projeto de fechadura com Raspberry Pi e conexão bluetooth (ou Wi-Fi, porque bluetooth no iPhone tá difícil).

Alguns links:

Configurando um IP estático:

https://www.modmypi.com/blog/tutorial-how-to-give-your-raspberry-pi-a-static-ip-address

http://www.rpiblog.com/2012/08/bluetooth-pairing-of-raspberry-pi-with.html

http://web.inter.nl.net/users/hanscees/bluezhowto.html#whatis

http://www.heatxsink.com/entry/how-to-pair-a-bluetooth-device-from-command-line-on-linux


Como parea iPhone com RPi via bluetooth usando linha de comando:

http://www.wolfteck.com/projects/raspi/iphone/

Aplicativo para conectar iPhone com RPi (via Wi-Fi):

https://github.com/blynkkk/blynk-library/blob/master/docs/Platforms.md#linux-raspberry-pi

Comandando as portas GPIO via Python:

http://raspi.tv/2013/rpi-gpio-basics-5-setting-up-and-using-outputs-with-rpi-gpio

Abrindo uma porta de garagem com RPi (em Wi-Fi):

http://www.driscocity.com/idiots-guide-to-a-raspberry-pi-garage-door-opener/

Que usa o WebIOPi:

http://webiopi.trouch.com/index.html

WebIOPi que funciona?

http://brian2012class.nfshost.com/wp-content/uploads/2015/04/webiopi.pdf

Veja Class 35:

http://brian2012class.nfshost.com/where-are-we/

Versão do node.js pré-compilada para Raspberry Pi:

http://weworkweplay.com/play/raspberry-pi-nodejs/

Projeto que usa node.js com Python:

http://tylerwowen.github.io/pisensors/

Script usando Web.py e GPIO!

http://newfreshpeace.blogspot.com/2013/01/raspberry-pi-gpio-web-interface-using.html

Chamada de função que funcionou:

    exec  = require('child_process').exec

https://nodejs.org/docs/v0.2.4/api.html

Lendo pinos com gpio:

http://raspberry.io/projects/view/reading-and-writing-from-gpio-ports-from-python/

http://raspi.tv/2013/how-to-use-interrupts-with-python-on-the-raspberry-pi-and-rpi-gpio-part-2

http://raspberrywebserver.com/gpio/using-interrupt-driven-gpio.html

Links sobre uso do RPi como fonte de PWM (pulse Width Modulation). Fundamental para controlar servo motores:

https://github.com/sarfata/pi-blaster/

Tem um ponto sobre o dhcp client do RPi sobre ter 2 clients rodando:

http://superuser.com/questions/924166/dhcp-failure-when-rebooting-rpi-2

removi o dhcpcd5...

Colocando o servidor node.js para executar após o boot
---

Veja esta página: http://www.raspberry-projects.com/pi/pi-operating-systems/raspbian/auto-running-programs

No meu caso editei o /etc/rc.local e acrescentei:

    # Executa o servidor server3.js da fechadura eletrica
    cd /home/pi/fechadurabt
    /usr/local/bin/node server3.js &
    printf "Executando node server3"

logo antes do final do script.
