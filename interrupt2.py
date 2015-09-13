#!/usr/bin/env python2.7
# script by Alex Eames http://RasPi.tv
# http://raspi.tv/how-to-use-interrupts-with-python-on-the-raspberry-pi-and-rpi-gpio-part-2
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)

# 22 will go to 3V3 (3.3V)
GPIO.setup(22, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(23, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

# now we'll define the threaded callback function
# this will run in another thread when our event is detected
def my_callback(channel):
    print "Rising edge detected on port 22 - even though, in the main thread\n"

print "You will also need a second button connected so that when pressed"
print "it will connect GPIO port 22 (pin 18) to 3V3 (pin 1)"
raw_input("Press Enter when ready\n>")

# The GPIO.add_event_detect() line below set things up so that
# when a rising edge is detected on port 22, regardless of whatever 
# else is happening in the program, the function "my_callback" will be run
# It will happen even while the program is waiting for
# a falling edge on the other button.
#GPIO.add_event_detect(22, GPIO.RISING, callback=my_callback, bouncetime=1000)
GPIO.add_event_detect(22, GPIO.FALLING, callback=my_callback, bouncetime=1000)

try:
	print "perdendo tempo"
	GPIO.wait_for_edge(23, GPIO.FALLING)

except KeyboardInterrupt:
	GPIO.cleanup()

GPIO.cleanup()           # clean up GPIO on normal exit
