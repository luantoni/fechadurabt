import sys
import RPi.GPIO as GPIO
from time import sleep
GPIO.setmode(GPIO.BCM)
GPIO.setup(4, GPIO.OUT, initial=1)
GPIO.output(4, 0)
sleep(1)
GPIO.output(4, 1)
GPIO.cleanup()
print("Fim do script");
sys.stdout.flush()
