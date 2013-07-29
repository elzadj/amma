/*
* @file Sensor.h
* @brief driver for sensors
* @author elzadj
* @version 0.0.1
* @date 20.04.13
*/


class Sensor
{
public:
	Sensor(int sensorPin);
	int getValue(); 

private:
	int _sensorPin;
	int _value;
	
};

