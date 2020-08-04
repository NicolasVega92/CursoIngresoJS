/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var numero;
	var respuesta;
	var sumaNegativos;
	var sumaPositovs;
	var cantPositivos;
	var cantNegativos;
	var cantCeros;
	var cantPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	sumaNegativos = 0;
	sumaPositovs = 0;
	cantCeros = 0;
	cantNegativos = 0;
	cantPositivos = 0;
	cantPares = 0;
	promedioNegativos = 0;
	promedioPositivos = 0;
	diferencia = 0;

	respuesta= true;

	do
	{
		do
		{
			numero = prompt("Ingrese un numero: ");
			numero = parseInt(numero);
		}
		while(isNaN(numero));

		if(numero % 2 == 0)
		{
			cantPares++;
		}

		if(numero > 0)
		{
			cantPositivos++;
			sumaPositovs += numero;
		}
		else
		{
			if(numero < 0)
			{
				cantNegativos++;
				sumaNegativos += numero;
			}
			else
			{
				cantCeros++;
			}
		}


		respuesta=confirm("desea continuar?");
	}
	while(respuesta==true);
	
	promedioPositivos = sumaPositovs / cantPositivos;
	promedioPositivos = promedioPositivos.toFixed(2);

	promedioNegativos = sumaNegativos / cantNegativos;
	promedioNegativos = promedioNegativos.toFixed(2);

	diferencia = sumaNegativos + sumaPositovs;

	//fin del while
console.log(sumaNegativos);
console.log(sumaPositovs);
console.log(cantCeros);
console.log(cantNegativos);
console.log(cantPositivos);
console.log(cantPares);
console.log(promedioPositivos);
console.log(promedioNegativos);
console.log(diferencia);
}//FIN DE LA FUNCIÓN