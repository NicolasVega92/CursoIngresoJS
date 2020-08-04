/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta;
	var acumulador;
	var bandera;

	numero = 0;
	respuesta = true;
	acumulador = 0;
	bandera = true;

	do
	{
		do
		{
			numero = prompt("Ingrese un numero: ");
			numero = parseInt(numero);
		}
		while(isNaN(numero));


			if(bandera == true)
			{
				maximo = numero;
				minimo = numero;
				bandera = false;
			}
			else
			{
				if(numero > maximo)
				{
					maximo = numero;
				}
				else
				{
					if(numero < minimo)
					{
						minimo = numero;
					}
				}
			}

		respuesta = confirm("Quiere continuar?");

	}
	while( respuesta == true);


	txtIdMaximo.value = maximo;
	txtIdMinimo.value = minimo;

}//FIN DE LA FUNCIÓN