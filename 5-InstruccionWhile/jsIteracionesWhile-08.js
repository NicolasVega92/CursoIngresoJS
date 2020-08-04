/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numero;
	var respuesta;
	var suma;
	var multiplicar;

	numero = 0;
	respuesta = true;
	
	suma = 0;
	multiplicar = 1;

	numero = prompt("Ingrese un numero: ");
	numero = parseInt(numero);
	respuesta = confirm("Quiere seguir");

	while( respuesta == true )
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		if(numero % 2 == 0)
		{
			suma = suma + numero;
		}
		else
		{
			multiplicar = multiplicar * numero;
		}
		
		respuesta = confirm("Quiere seguir");

	}


	txtIdSuma.value = suma;

	txtIdProducto.value = multiplicar;

}//FIN DE LA FUNCIÓN