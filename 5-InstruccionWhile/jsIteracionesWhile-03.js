/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var respuesta;
	var raza;
	var peso;
	var temperatura;
	var edad;
	var peligroExtincion;
	var sumaEdades;
	var contadorAnimales;
	var masPesado;
	var razaMasPesado;
	var banderaTemperatura;
	var temperaturaMaxima;

	banderaTemperatura = true;
	contadorAnimales = 0;
	sumaEdades = 0;
	respuesta = true;


	do
	{
		//RAZA
		raza = prompt("Ingrese la raza del animal: ");

		//PESO
		peso = prompt("Ingrese el peso del animal: ");
		peso = parseInt(peso);
		while(isNaN(peso))
		{
			peso = prompt("ERROR: Ingrese el peso del animal: ");
			peso = parseInt(peso);
		}

		//TEMPERATURA
		temperatura = prompt("Ingrese la temperatura del lugar: ");
		temperatura = parseInt(temperatura);
		while(isNaN(temperatura))
		{
			temperatura = prompt("ERROR: Ingrese la temperatura del lugar: ");
			temperatura = parseInt(temperatura);
		}

		//EDAD
		edad = prompt("Ingrese la edad: ");
		edad = parseInt(edad);
		while(isNaN(edad))
		{
			edad = prompt("ERROR: Ingrese una edad válida");
			edad = parseInt(edad);
		}

		//PELIGRO DE EXTINCION
		peligroExtincion = prompt("Diga si esta en peligro de extincion");
		while(peligroExtincion != "si" && peligroExtincion != "no")
		{
			peligroExtincion = prompt("ERROR: Indique (si o no) según corresponda, ¿Peligro de extincion?");
		}

		//PROMEDIO EDAD (acumular sumas y contador)
		sumaEdades = sumaEdades + edad;
		contadorAnimales++;

		//RAZA MAS PESADO
		if(contadorAnimales == 1)
		{
			razaMasPesado = raza;
			masPesado = peso;
		}
		else
		{
			if(peso > masPesado)
			{
				razaMasPesado = raza;
				masPesado = peso;
			}
		}

		//TEMPERATURA MAXIMA
		if(peligroExtincion == "si")
		{
			if(banderaTemperatura == true)
			{
				banderaTemperatura = false;
				temperaturaMaxima = temperatura;
			}
			else
			{
				if(temperatura > temperaturaMaxima)
				{
					temperaturaMaxima = temperatura;
				}
			}
		}
		
		respuesta = confirm("Desea continuar?");
	}while(respuesta == true);

	//PROMEDIO EDAD
	promedioEdad = sumaEdades / contadorAnimales;
	promedioEdad = promedioEdad.toFixed(2);


	console.log("El promedio de edad de los animales es "+promedioEdad);
	console.log("La raza del animal mas pesado es "+ razaMasPesado);
	console.log("La temperatura maxima es de "+temperaturaMaxima);

	/*
	var claveIngresada;
	
	claveIngresada = prompt("ingrese el número clave.");

	while( claveIngresada != "utn750")
	{
		claveIngresada = prompt("Error!! Reingrese su clave: ");	
	}

	alert("INGRESO CORRECTO");
	*/
}//FIN DE LA FUNCIÓN
