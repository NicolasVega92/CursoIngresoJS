function mostrar()
{
	var numero;
	var contadorDivisores;

	numero = prompt("Ingrese un numero: ");
	numero = parseInt(numero);

	contadorDivisores = 0;

	for(var i = 1; i <= numero ; i++ )
	{
		if( numero % i == 0)
		{
			console.log(i);
			contadorDivisores++;
		}
	}
	
	console.log("Los divisores de "+numero+" son "+contadorDivisores);
}//FIN DE LA FUNCIÓN