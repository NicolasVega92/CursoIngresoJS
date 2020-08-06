function mostrar()
{
/*
	for(var i=1; i < 11; i++ )
	{
		document.write(i);
	}
*/

//Ejercicio
/*
Ingreso de 5 numeros (entre -100 y 500). 
Se pide mostrar, 
la suma de todos los numeros,
promedios,
cuantos numeros son pares,
el maximo numero,
el minimo
*/ 

var numero;
var sumaNumeros;
var promedio;
var minimo;
var maximo;
var bandera;
var pares;

bandera = true;
sumaNumeros = 0;
pares = 0;

	for(var i=0; i < 5 ; i++)
	{
		numero=prompt("Ingrese un numero: ");
		numero=parseInt(numero);
		
		
		sumaNumeros = sumaNumeros + numero;

		if(numero % 2 == 0)
		{
			pares++;
		}

		if(i = 0 || numero < minimo)
		{
			minimo = numero;
		}
		if(i = 0 || numero > maximo)
		{
			maximo = numero;
		}
		
	}

	promedio = sumaNumeros / i;


}