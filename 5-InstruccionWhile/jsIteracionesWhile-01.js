/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var respuesta;
	var sexo;
	var altura;
	var edad;
	var nombre;
	var banderaMasAlta;
	var masAlta;
	var nombreMasAlta;
	var banderaMasViejo;
	var masViejo;
	var nombreViejo;
	var banderaAdolescente;

	banderaMasViejo = true;
	banderaAdolescente = true;
	respuesta = true;
	banderaMasAlta = true;

	while(respuesta == true)
	{
		//NOMBRE
		nombre = prompt("Ingrese su nombre: ");

		//SEXO
		sexo = prompt("Ingrese su sexo: ");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR: ingrese según corresponda ( f - m)");
		}

		//ALTURA
		altura = prompt("Ingrese su altura: ");
		altura = parseInt(altura);
		while(isNaN(altura) || altura < 1)
		{
			altura = prompt("ERROR: Ingrese su altura: ");
			altura = parseInt(altura);
		}

		//EDAD
		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		while(isNaN(edad) || edad < 0)
		{
			edad = prompt("ERROR: Ingrese su edad");
			edad = parseInt(edad);
		}

		//MUJER MAS ALTA
		switch(sexo)
		{
			case "f":
				if( banderaMasAlta == true)
				{
					banderaMasAlta = false;
					masAlta = altura;
					nombreMasAlta = nombre;
				}
				else
				{
					if(altura > masAlta)
					{
						masAlta = altura;
						nombreMasAlta = nombre;
					}
				}
				/*
				if(banderaMasAlta == true || altura > masAlta)
				{
					banderaMasAlta = false;
					masAlta = altura;
					nombreMasAlta = nombre;
				}
				*/
				break;
			
			case "m":
				if(banderaMasViejo == true)
				{
					banderaMasViejo = false;
					masViejo = edad;
					nombreViejo = nombre;
				}
				else
				{
					if(edad > masViejo)
					{
						masViejo = edad;
						nombreViejo = nombre;
					}
				}
		}

		//ADOLESCENTE
		if(edad > 12 && edad < 18)
		{
			if(banderaAdolescente == true)
			{
				banderaAdolescente = false;
				nombreAdolescente = nombre;
			}
		}


		respuesta = confirm("Desea continuar?");
	}



	console.log(nombreAdolescente);
	console.log(masViejo +"  "+nombreViejo);
	console.log(masAlta + "   "+ nombreMasAlta);



	/*
	var i; //variable de control
	
	i = 0;

	while(i < 10) //Condicion de continuidad del bucle
	{

		i = i + 1; //contador o i++

		alert(i);
		//document.write(i);
		//console.log(i + "<br>");
	}
	
	
*/
}//FIN DE LA FUNCIÓN