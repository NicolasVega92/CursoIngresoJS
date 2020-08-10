function mostrar()
{

	/*
	 1) De 5 personas que ingresan al hospital se deben tomar y validar los sig datos:
		nombre, temperatura, sexo y edad
		a)informar la catnidad de personas de cada sexo
		b) la edad promedio total
		c) la mujer con mas temperatura (si la hay)
		
	*/
	var nombre;
	var temperatura;
	var sexo;
	var edad;
	var contadorMujeres;
	var contadorVarones;
	var sumaDeEdad;
	var promedio;
	var banderaMujer;

	banderaMujer = true;
	promedio = 0;
	sumaDeEdad = 0;
	contadorMujeres = 0;
	contadorVarones = 0;

	for(var ingresantes = 0; ingresantes < 2; ingresantes++ )
	{
		//NOMBRE
		nombre = prompt("Ingrese su nombre");

		//TEMPERATURA
		temperatura = prompt("Ingrese su temperatura");
		temperatura = parseInt(temperatura);
		while(isNaN(temperatura))
		{
			temperatura = prompt("ERROR: Ingrese su temperatura, en valor numerico");
			temperatura = parseInt(temperatura);
		}

		//SEXO
		sexo = prompt("Ingrese su sexo");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR: Ingrese (f - m) según corresponda");
		}

		//EDAD
		edad = prompt("ingrese su edad");
		edad = parseInt(edad);
		while(isNaN(edad) || edad < 0 || edad > 100)
		{
			edad = prompt("ERROR: Ingrese su edad");
			edad = parseInt(edad);
		}

		//a)informar la catnidad de personas de cada sexo
		//c) la mujer con mas temperatura (si la hay)
		switch(sexo)
		{
			case "f":
				contadorMujeres++;
				if(banderaMujer == true || temperatura > mujerMayorTemperatura)
				{
					banderaMujer = false;
					mujerMayorTemperatura = temperatura;
					mujerNombreMayorTemp = nombre;
				}
				break;
			case "m":
				contadorVarones++;
		}

		//b) la edad promedio total
		sumaDeEdad = sumaDeEdad + edad;


	}
	console.log(contadorMujeres + contadorVarones);
	promedio = sumaDeEdad / (contadorMujeres + contadorVarones);
	promedio = promedio.toFixed(2);

	console.log("La cantidad de varones es de "+contadorVarones+" y de mujeres es de "+contadorMujeres);
	console.log("El promedio de edad total es de "+promedio);
	if(banderaMujer == false)
	{
		console.log("La mujer con mayor temperatura es "+mujerNombreMayorTemp+" con "+mujerMayorTemperatura+" de temperatura");
	}


	/*
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	switch (mesDelAño)
	{
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("a clases!!!");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
	}
*/
}//FIN DE LA FUNCIÓN