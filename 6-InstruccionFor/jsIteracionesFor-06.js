function mostrar()
{

	var numero;
	var contador;

	contador = 0;

	numero = prompt("Introduce un numero: ");
	numero = parseInt(numero);

	for (var i = 2; i <= numero; i+=2)
	{
		contador++;
		console.log(i);
		
	}

	console.log("la cantidad de numeros es: "+contador);


}//FIN DE LA FUNCIÓN