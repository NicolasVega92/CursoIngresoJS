/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var nombre;
	var edad;
	var altura;
	var sexo;
	var dinero;
	var cantidadHijos;
	var edadMasVieja;
	var nombreMasVieja;
	var contadorMujeres;
	var sumaAlturaMujeres;
	var mujerMasJoven;
	var edadMasJoven;

	sumaAlturaMujeres = 0;
	contadorMujeres = 0;

	for(var i = 0; i < 3; i++)
	{
		//NOMBRE
		nombre = prompt("Ingrese su nombre: ");

		//EDAD
		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);
		while(isNaN(edad) || edad > 115 || edad < 0)
		{
			edad = prompt("ERROR: Ingrese su edad:");
			edad = parseInt(edad);
		}

		//ALTURA
		altura = prompt("Ingrese su altura:");
		altura = parseInt(altura);
		while(altura < 30 || altura > 230 || isNaN(altura))
		{
			altura = prompt("ERROR: Ingrese altura válida:");
			altura = parseInt(altura);
		}

		//SEXO
		sexo = prompt("Ingrese su sexo: ");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR: ingrese (f - m) según corresponda: ");
		}

		//DINERO
		dinero = prompt("Ingrese el valor del dinero:");
		dinero = parseInt(dinero);
		while(isNaN(dinero))
		{
			dinero = prompt("ERROR: ingrese un valor numerico: ");
			dinero = parseInt(dinero);
		}

		//CANTIDAD HIJOS
		cantidadHijos = prompt("Cuantos hijos tiene: ");
		cantidadHijos = parseInt(cantidadHijos);
		while(isNaN(cantidadHijos) || cantidadHijos > 10 || cantidadHijos < 0)
		{
			cantidadHijos = prompt("ERROR: Cuantos hijos tiene: ");
			cantidadHijos = parseInt(cantidadHijos);
		}

		//Nombre persona mas Vieja
		if( i == 0)
		{
			edadMasVieja = edad;
			nombreMasVieja = nombre;
		}
		else
		{
			if(edad > edadMasVieja)
			{
				edadMasVieja = edad;
				nombreMasVieja = nombre;
			}
		}

		//PROMEDIO ALTURA MUJERES
		//NOMBRE MUJER MAS JOVEN
		switch(sexo)
		{
			case "f":
				if(contadorMujeres == 0)
				{
					mujerMasJoven = nombre;
					edadMasJoven = edad;
				}
				else
				{
					if(edad < edadMasJoven)
					{
						mujerMasJoven = nombre;
						edadMasJoven = edad;
					}
				}
				sumaAlturaMujeres = sumaAlturaMujeres + altura;
				contadorMujeres++;
				break;
		}

	}
	
	promedioMujeresAltura = sumaAlturaMujeres / contadorMujeres;
	promedioMujeresAltura = promedioMujeresAltura.toFixed(2);


	console.log("El mas viejo es "+nombreMasVieja+ " con  "+edadMasVieja);
	console.log("El promedio de altura de las mujeres es de "+promedioMujeresAltura);

	/*
	var contador;
	contador=10; 

	while( contador > 0 )
	{
		console.log(contador);
		contador--;
	}
*/

}//FIN DE LA FUNCIÓN