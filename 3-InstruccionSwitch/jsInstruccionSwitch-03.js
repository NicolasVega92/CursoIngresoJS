function mostrar()
{
	/*
	Nos ingresan una cantidad indeterminada de estadias de vacaciones, validar:
	nombre del titular, lugar (bariloche, cataratas o salta)temporada(otoño, invierno, verano, primavera)cantida de personas 
		a) lugar mas elegido
		b) el nombre del titular que lleva mas pasajeros
		c) el promedio de ppersonas por viaje que viajan en invierno
	*/

	var respuesta;
	var nombreTitular;
	var lugar;
	var temporada;
	var cantidadPersonas;
	var masElegido;
	var contadorBariloche;
	var contadorCataratas;
	var contadorSalta;
	var banderaTitular;
	var mayorCantidadPersonas;
	var acumuladorPersonas;
	var contadorInvierno;
	var promedioInvierno;

	promedioInvierno = 0;
	contadorInvierno = 0;
	acumuladorPersonas = 0;
	banderaTitular = true;
	contadorBariloche = 0;
	contadorCataratas = 0;
	contadorSalta = 0;
	respuesta = true;

	while( respuesta == true)
	{	
		//NOMBRE
		nombreTitular = prompt("Ingrese el nombre del titular: ");

		//LUGAR
		lugar = prompt("Ingrese el destino:");
		while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta")
		{
			lugar = prompt("ERROR: Ingrese (bariloche - cataratas - salta):");
		}

		//TEMPORADA
		temporada = prompt("Ingrese en que temporada desea ir:");
		while(temporada != "otoño" && temporada != "invierno" && temporada != "primavera" && temporada != "verano")
		{
			temporada = prompt("ERROR: ingrese (verano - primavera - otoño - invierno) ");
		}

		//CANTIDAD DE PERSONAS
		cantidadPersonas = prompt("Ingrese la cantidad de personas que asistiran: ");
		cantidadPersonas = parseInt(cantidadPersonas);
		while(isNaN(cantidadPersonas) || cantidadPersonas < 1)
		{
			cantidadPersonas = prompt("ERROR: Ingrese la cantidad de personas que asistiran: ");
			cantidadPersonas = parseInt(cantidadPersonas);
		}

		//a) lugar mas elegido
		switch(lugar)
		{
			case "bariloche":
				contadorBariloche++;
				break;
			case "cataratas":
				contadorCataratas++;
				break;
			case "salta":
				contadorSalta++;
				break;
		}
		//b) el nombre del titular que lleva mas pasajeros
		if(banderaTitular == true || cantidadPersonas > mayorCantidadPersonas)
		{
			banderaTitular = false;
			mayorCantidadPersonas = cantidadPersonas;
			mayorNombreTitularCantidadPersonas = nombreTitular;
		}
		//c) el promedio de ppersonas por viaje que viajan en invierno
		switch(temporada)
		{
			case "invierno":
				acumuladorPersonas = acumuladorPersonas + cantidadPersonas;
				contadorInvierno++;
		}

		respuesta = confirm("Desea continuar?");
	}

	//a) lugar mas elegido
	if(contadorSalta > contadorBariloche && contadorSalta > contadorCataratas)
	{
		masElegido = "Salta";
	}
	else
	{
		if(contadorCataratas > contadorBariloche)
		{
			masElegido = "Cataratas";
		}
		else
		{
			masElegido = "Bariloche";
		}
	}

	//c) el promedio de ppersonas por viaje que viajan en invierno
	promedioInvierno = acumuladorPersonas / contadorInvierno;
	promedioInvierno = promedioInvierno.toFixed(0);

	console.log("El lugar mas elegido es "+masElegido);
	console.log("El nombre del titular que llevas mas pasajeros es "+mayorNombreTitularCantidadPersonas);
	if(contadorInvierno != 0)
	{
		console.log("El promedio de personas que viajan en invierno es de "+promedioInvierno);
	}





	/*
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
			break;
		default:
			alert("Este mes tiene 30 o más días");
	}
	*/
	


}//FIN DE LA FUNCIÓN