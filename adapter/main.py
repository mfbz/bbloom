#!/usr/bin/python3

import time
import Adafruit_DHT
import Adafruit_ADS1x15

# The frequency on main loop
LOOP_DELAY = 1

# DHT11 static instance and settings
DHT11 = Adafruit_DHT.DHT11
DHT11_PIN = 4
DHT11_RETRY_LIMIT = 2
DHT11_RETRY_DELAY = 1

# Create an ADS1115 ADC (16-bit) instance with default i2c address (0x48)
adc = Adafruit_ADS1x15.ADS1115()
# Choose a gain of 1 for reading voltages from 0 to 4.09V
ADC_GAIN = 1
# MAX V depend on gain, check datasheet if unclear
ADC_MAX_V = 4.096
ADC_MAX_READ = 32767

# The values to be used for soil moisture sensor % calculation as min and max values
CSMS_AIR_VALUE = 518
CSMS_WATER_VALUE = 1633

# Light sensor params for lux calculation
# Raspberry voltage (V)
LDR_V = 3.3
# LDR circuit resistance (kOHM)
LDR_R = 10

# The main data retrieval loop
# Data is considered correctly extracted when all the values in data array are != from -1
while True:
    # The data extracted from sensors initialized as an array of zeros
    # 0: soil moisture (%), 1: light (lx), 2: humidity (%), 3: temperature (C)
    data = [-1] * 4

    try:
        # Read capacitive soil moisture sensor voltage reading
        csms_v0 = adc.read_adc(0, gain=ADC_GAIN)
        # Set value by calculating percentage from min and max values obtained through calibration
        data[0] = round(((csms_v0 - CSMS_AIR_VALUE) * 100) /
                        (CSMS_WATER_VALUE - CSMS_AIR_VALUE))

        # Read light sensor voltage reading
        ldr_v0 = adc.read_adc(1, gain=ADC_GAIN)
        # Scale reading depending on the ADS1115 scale (https://learn.adafruit.com/raspberry-pi-analog-to-digital-converters/ads1015-slash-ads1115)
        ldr_vs = ldr_v0 * ADC_MAX_V / ADC_MAX_READ
        # Calculate lux with adjusted formula (https://emant.com/316002)
        data[1] = round((((LDR_V*500)/ldr_vs) - 500) / LDR_R)

        # Try to grab a sensor reading, retrying n times with delay
        humidity, temperature = Adafruit_DHT.read_retry(
            DHT11, DHT11_PIN, retries=DHT11_RETRY_LIMIT, delay_seconds=DHT11_RETRY_DELAY)
        # Sometimes we won't get a reading because Linux can't guarantee the timing of calls to read the sensor
        if humidity is not None and temperature is not None:
            data[2] = humidity
            data[3] = temperature
    except Exception as error:
        print(error.args[0])
        continue

    print("{} % | {} lx | {} % | {} C".format(
        data[0], data[1], data[2], data[3]))
    time.sleep(LOOP_DELAY)
