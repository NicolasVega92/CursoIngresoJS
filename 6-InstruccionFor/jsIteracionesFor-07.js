function mostrar()
{
	var numero;
	var contador;

	contador = 0;

	numero = prompt("Introduce un numero: ");
	numero = parseInt(numero);

	for(var i = 1; i<=numero ; i++ )
	{
		if(numero % i == 0)
		{
			console.log("Los divisores son: "+i);
			contador++;
		}
	}

	console.log("La cantidad de divisores es: "+contador);
	


}//FIN DE LA FUNCIÓN