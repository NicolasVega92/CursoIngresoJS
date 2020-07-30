function mostrar()
{
	var numero;
	var i;
	var acumulador;

	i = 0;
	acumulador = 0;

	while(i < 5 )
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		
		acumulador = acumulador + numero ;
		//console.log(acumulador);
		i++;
	}

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / i;

	
	// var contador;
	// var acumulador;
	// var numeroIngresado;

	// contador=0;
	// acumulador=0;
	
	
	// txtIdSuma.value=acumulador;
	// txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN