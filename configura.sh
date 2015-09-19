#!/bin/bash
echo "--------------------------------------------------"
echo "Para executar passo a passo, responda com s agora:"
echo "Deseja executar passo-a-passo (s/N)?"
echo "------------------------------------"
read PASSOAPASSO

if [ "$PASSOAPASSO" = "s" ]; then
	echo "--------------------------------------"
	echo "Em qualquer etapa, responda com N para"
	echo "interromper todo o processo."
	echo "Iniciando o processo."
	echo "-> sudo apt-get install byobu"
	echo "Instala byobu."
	echo "Continua? (s/N)"
	echo "-----------------------------------"
	read RESPOSTA
	test "$RESPOSTA" != "s" && exit
fi
sudo apt-get install byobu

if [ "$PASSOAPASSO" = "s" ]; then
	echo "--------------------------------------"
	echo "-> curl -sLS https://apt.adafruit.com/add | sudo bash"
	echo "Adiciona repositório da Adafruit"
	echo "Continua? (s/N)"
	echo "---------------"
	read RESPOSTA
	test "$RESPOSTA" != "s" && exit
fi
curl -sLS https://apt.adafruit.com/add | sudo bash

if [ "$PASSOAPASSO" = "s" ]; then
	echo "--------------------------------------------"
	echo "-> sudo apt-get install python-dev python-pi"
	echo "Instala Python."
	echo "Continua? (s/N)"
	echo "---------------"
	read RESPOSTA
	test "$RESPOSTA" != "s" && exit
fi
sudo apt-get install python-dev python-pip

if [ "$PASSOAPASSO" = "s" ]; then
	echo "----------------------------------------"
	echo "-> sudo pip install --upgrade distribute"
	echo "Instala pip (Python)."
	echo "Continua? (s/N)"
	echo "---------------"
	read RESPOSTA
	test "$RESPOSTA" != "s" && exit
fi
sudo pip install --upgrade distribute

if [ "$PASSOAPASSO" = "s" ]; then
	echo "---------------------------"
	echo "-> sudo pip install ipython"
	echo "Instala ipython."
	echo "Continua? (s/N)"
	echo "---------------"
	read RESPOSTA
	test "$RESPOSTA" != "s" && exit
fi
sudo pip install ipython

if [ "$PASSOAPASSO" = "s" ]; then
	echo "--------------------------------------"
	echo "-> sudo pip install --upgrade RPi.GPIO"
	echo "Instala RPi.GPIO."
	echo "Continua? (s/N)"
	echo "---------------"
	read RESPOSTA
	test "$RESPOSTA" != "s" && exit
fi
sudo pip install --upgrade RPi.GPIO

if [ "$PASSOAPASSO" = "s" ]; then
	echo "--------------------------------------"
	echo "-> sudo apt-get install node"
	echo "Instala Node.js"
	echo "Continua? (s/N)"
	echo "---------------"
	read RESPOSTA
	test "$RESPOSTA" != "s" && exit
fi
sudo apt-get install node

if [ "$PASSOAPASSO" = "s" ]; then
	echo "--------------------------------------"
	echo "-> snpm install rpi-gpi"
	echo "Instala módulo GPIO para Node.js"
	echo "Continua? (s/N)"
	echo "---------------"
	read RESPOSTA
	test "$RESPOSTA" != "s" && exit
fi
npm install rpi-gpio


echo "FIM."
