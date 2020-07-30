/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numero;
	var i;
	var acumulador;
	var respuesta;
	var promedio;

	i=0;
	acumulador=0;
	respuesta= true;

	while( respuesta == true )
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		
		acumulador = acumulador + numero;
		// ACUMULADOR += NUMERO; otra forma de lo de arriba
		i++;

		respuesta = confirm("Desea ingresar otro número? (si - no)");
	}


	txtIdSuma.value=acumulador;
	
	promedio = acumulador/i
	txtIdPromedio.value=promedio.toFixed(2);

}//FIN DE LA FUNCIÓN