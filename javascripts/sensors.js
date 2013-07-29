$.ajaxSetup ({  
    cache: false  
});  

setInterval(function() { 
    $.getJSON('sensors.json', function(sensors) {
        
        var temperature = (sensors.temperature/1 + sensors.temperature2/1) / 2; //TODO fix govnocode
		var pressuremmHg = sensors.pressuremmHg;
		var humidity = sensors.humidity;
		var light = sensors.light;
		var noise = sensors.noise;
		var gas = sensors.gas;
		var smoke = sensors.smoke;
		var flame = sensors.flame;

		var mintemp = $("#mintemp").val();
		var maxtemp = $("#maxtemp").val();

		// TEMPERATURE
		$("#temperature").html(temperature + "°C");	
		if (temperature < mintemp || temperature > maxtemp)		
			$("#temperature").parent("div.panel").addClass("panel_alert");	
		else
			$("#temperature").parent("div.panel").removeClass("panel_alert");
	
		// PRESSURE
		$("#pressure").html(pressuremmHg + " mmHg");
		if (pressuremmHg < 730 || pressuremmHg > 770)
			$("#pressure").parent("div.panel").addClass("panel_alert");
		else
			$("#pressure").parent("div.panel").removeClass("panel_alert");

		// HUMIDITY
		$("#humidity").html(humidity + " %");
		if (humidity < 30 || humidity > 60)
			$("#humidity").parent("div.panel").addClass("panel_alert");
		else
			$("#humidity").parent("div.panel").removeClass("panel_alert");

		// LIGHT
		if (light < 100)
		{
			$("#light").parent("div.panel").addClass("panel_alert");
			$("#light").html('Ниже нормы');
		}
		else
			if (light > 500) 
				{
					$("#light").parent("div.panel").addClass("panel_alert");
					$("#light").html('Выше нормы');
				}
				else
				{
					$("#light").parent("div.panel").removeClass("panel_alert");
					$("#light").html('Норма');
				}

		// NOISE
		if (noise > 150)
		{
			$("#noise").parent("div.panel").addClass("panel_alert");
			$("#noise").html('Выше нормы');
		}
		else
		{
			$("#noise").parent("div.panel").removeClass("panel_alert");
			$("#noise").html('Норма');
		}

		// GAS
		if (gas > 100)
		{
			$("#gas").parent("div.panel").addClass("panel_alert");
			$("#gas").html('Обнаружен!');
		}
		else
		{
			$("#gas").parent("div.panel").removeClass("panel_alert");
			$("#gas").html('Нет');
		}

		// SMOKE
		if (smoke > 100)
		{
			$("#smoke").parent("div.panel").addClass("panel_alert");
			$("#smoke").html('Обнаружен!');
		}
		else
		{
			$("#smoke").parent("div.panel").removeClass("panel_alert");
			$("#smoke").html('Нет');
		}

		// FLAME
		if (flame > 100)
		{
			$("#flame").parent("div.panel").addClass("panel_alert");
			$("#flame").html('Обнаружено!');
		}
		else
		{
			$("#flame").parent("div.panel").removeClass("panel_alert");
			$("#flame").html('Нет');
		}

		
	}); //end of getJSON




}, 3000);// end of setInterval
