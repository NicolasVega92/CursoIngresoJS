/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado > 9 || numeroIngresado < 0 )
	{
		numeroIngresado = prompt("Error!! Ingrese un numero valido entre 0 y 9: ");
		numeroIngresado = parseInt(numeroIngresado);
		
	}

	txtIdNumero.value = numeroIngresado;

}//FIN DE LA FUNCIÓN