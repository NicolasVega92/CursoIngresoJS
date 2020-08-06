function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var tempCorporal;
	var respuesta;
	var masTemperatura;
	var nombreTemperatura;
	var banderaTemperatura;
	var mayoresViudos;
	var hombresViudosSolteros;
	var mayoresConTempAlta;
	var edadPromedio;
	var contadorHombreSoltero;
	var edadPromedioTotal;

	contadorHombreSoltero = 0;
	edadPromedio = 0;
	mayoresConTempAlta = 0;
	hombresViudosSolteros = 0;
	mayoresViudos = 0;
	banderaTemperatura = true;
	respuesta = true;
	edadPromedioTotal = 0;
	

	do
	{
		//NOMBRE
		nombre = prompt("Dime tu nombre: ");

		//EDAD
		edad = prompt("Dime tu edad: ");
		edad = parseInt(edad); 

		while(edad < 1 || isNaN(edad) )
		{
		  edad = prompt("ERROR: Ingresa una edad válida: ");
		  edad = parseInt(edad);
		}

		//SEXO
		sexo = prompt("Ingrese su sexo");

		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR: Ingrese f o m según corresponda.");
		}

		//ESTADO CIVIL
		estadoCivil = prompt("Cual es tu estado civil?");

		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("ERROR: ingrese (soltero - viudo - casado)");
		}

		//TEMPERATURA CORPORAL
		tempCorporal = prompt("Ingrese su temperatura corporal");
		tempCorporal = parseInt(tempCorporal);

		while(isNaN(tempCorporal))
		{
			tempCorporal = prompt("ERROR: Ingrese una temperatu válida");
			tempCorporal = parseInt(tempCorporal);
		}
		

		//NOMBRE DEL QUE TIENE MAS TEMPERATURA
		if(banderaTemperatura == true)
		{
			masTemperatura = tempCorporal;
			nombreTemperatura = nombre;
			banderaTemperatura = false;
		}
		else
		{
			if(tempCorporal > masTemperatura)
			{
				masTemperatura = tempCorporal;
				nombreTemperatura = nombre;
			}
		}

		//MAYORES VIUDOS
		//HOMBRES Solteros o Viudos
		//El promedio de edad entre los hombres solteros.
		switch(estadoCivil)
		{
			case "viudo":
				if(edad > 60)
				{
					mayoresViudos++;
				}
				if(sexo == "m")
				{
					hombresViudosSolteros++;
				}
				break;

			case "soltero":
				if(sexo == "m")
				{
					hombresViudosSolteros++;
					edadPromedio = edadPromedio + edad;
					contadorHombreSoltero++;
				}
				break;
		}

		//PERSONAS DE TERCERA EDAD CON MAS DE 38 DE TEMPERATURA
		if(edad > 60)
		{
			if(tempCorporal > 38)
			{
				mayoresConTempAlta++;
			}
		}


		//FIN LOOP
		respuesta = confirm("Desea ingresar otra persona?");
	}
	while(respuesta == true);

	//PROMEDIO TOTAL
	edadPromedioTotal = edadPromedio / contadorHombreSoltero;


	console.log("El de más temperatura es "+nombreTemperatura+" con "+masTemperatura);
	console.log("La cantidad de viudos mayores es de "+mayoresViudos);
	console.log("La cantidad de hombres viudos o solteros es de "+hombresViudosSolteros);
	console.log("La cantidad de personas de tercera edad con más de 38 grados es de "+mayoresConTempAlta);
	console.log("El promedio de edad de los hombres solteros es de "+edadPromedioTotal);
}
