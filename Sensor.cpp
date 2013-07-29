/**
 * @file Sensor.cpp
 * @brief driver for sensors
 * @author elzadj
 * @version 0.0.1
 * @date 20.04.13
*/

#include "Sensor.h"
#include "Arduino.h"


Sensor::Sensor(int sensorPin) : _sensorPin(sensorPin)
{
  pinMode(_sensorPin, INPUT);
}

int Sensor::getValue()
{
  _value = analogRead(_sensorPin);
  return _value;
}

