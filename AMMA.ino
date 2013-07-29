#include "Sensor.h"
#include <dht.h>
#include <Wire.h>
#include <Adafruit_BMP085.h>

Sensor gasSensor = Sensor(0);
Sensor smokeSensor = Sensor(1);
Sensor lightSensor = Sensor(3);
Sensor noiseSensor = Sensor(4);
Sensor flameSensor = Sensor(5);
DHT dhtSensor = DHT();
Adafruit_BMP085 bmp;

void setup() 
{
  Serial1.begin(9600);
  dhtSensor.attach(A2);
  if (!bmp.begin()) {
    Serial1.println("Could not find a valid BMP085 sensor, check wiring!");
  while (1) {}
  }
}

void loop() 
{
  dhtSensor.update();
  
  switch (dhtSensor.getLastError())
    {
        case DHT_ERROR_OK:
            char msg[128];
            sprintf(msg, "Temperature = %d Humidity = %d", 
                    dhtSensor.getTemperatureInt(), dhtSensor.getHumidityInt());
            Serial1.println(msg);
            break;
        case DHT_ERROR_START_FAILED_1:
            Serial1.println("Error: start failed (stage 1)");
            break;
        case DHT_ERROR_START_FAILED_2:
            Serial1.println("Error: start failed (stage 2)");
            break;
        case DHT_ERROR_READ_TIMEOUT:
            Serial1.println("Error: read timeout");
            break;
        case DHT_ERROR_CHECKSUM_FAILURE:
            Serial1.println("Error: checksum error");
            break;
    }
  
	Serial1.print("Gas = ");
	Serial1.println(gasSensor.getValue());

	Serial1.print("Smoke = ");
	Serial1.println(smokeSensor.getValue());

	Serial1.print("Flame = ");
	Serial1.println(flameSensor.getValue());

	Serial1.print("Light = ");
	Serial1.println(lightSensor.getValue());

	Serial1.print("Noise = ");
	Serial1.println(noiseSensor.getValue());

    Serial1.print("Temperature = ");
    Serial1.print(bmp.readTemperature());
    Serial1.println(" *C");
    
    Serial1.print("PressuremmHg = ");
    Serial1.print(bmp.readPressure()*0.0075);
    Serial1.println(" mm Hg");
    
    Serial1.println();

	delay(3000);
}


