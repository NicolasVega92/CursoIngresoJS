function mostrar()
{
	var numero;
	var primo;

	primo = true;

	numero = prompt("Introduce un numero: ");
	numero = parseInt(numero);


	for(var i=2; i<numero; i++)
	{
		if(numero % i == 0)
		{
			primo = false;
		}
	}

	if(primo == true)
	{
		console.log("Es primo "+numero);
	}

}//FIN DE LA FUNCIÓN