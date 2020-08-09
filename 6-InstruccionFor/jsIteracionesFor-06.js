function mostrar()
{
	var numero;
	var contadorPares;


	contadorPares = 0;
	numero = prompt("Ingrese un numero: ");
	numero = parseInt(numero);

	for(var i = 2 ; i <= numero; i+=2)
	{
		console.log(i);
		contadorPares++;
	}
	console.log("la cantidad de numeros pares es: "+contadorPares);

}//FIN DE LA FUNCIÓN