#!/usr/bin/python3

import time
import Adafruit_DHT
import Adafruit_ADS1x15

# The frequency on main loop
LOOP_DELAY = 1

# Create an ADS1115 ADC (16-bit) instance with default i2c address (0x48)
adc = Adafruit_ADS1x15.ADS1115()
# Choose a gain of 1 for reading voltages from 0 to 4.09V
ADC_GAIN = 1

# Run loop N times to get average capacitive soil moisture sensor value
CALIB_READ_COUNT = 1000
CALIB_DISCART_COUNT = 100
# The value accumulator
acc = 0

for i in range(CALIB_READ_COUNT):
    value = adc.read_adc(0, gain=ADC_GAIN)
    print("{}".format(value))

    if i >= CALIB_DISCART_COUNT:
        acc += value

    time.sleep(LOOP_DELAY)

print("Average value is {}".format(acc/(CALIB_READ_COUNT - CALIB_DISCART_COUNT)))
