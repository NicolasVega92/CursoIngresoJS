/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estCivil;
	var sueldoIngresado;
	var legajoIngresado;
	var nacionalidadIngresado;

	edadIngresada = prompt("Ingrese su edad: ");
	edadIngresada = parseInt(edadIngresada);

	while(edadIngresada < 18 || edadIngresada > 90 || isNaN(edadIngresada))
	{
		edadIngresada = prompt("Ingrese una edad válida (18 - 90): ");
		edadIngresada = parseInt(edadIngresada);
	}
	txtIdEdad.value = edadIngresada;


	sexoIngresado = prompt("Ingrese 'M' para masculino o 'F' para femenino: ").toUpperCase();

	while( sexoIngresado != "M" && sexoIngresado != "F")
	{
		sexoIngresado = prompt("Ingrese 'M' o 'F': ").toUpperCase();
	}
	txtIdSexo.value = sexoIngresado;


	estCivil = prompt("Ingrese: 1 para soltero, 2 para casado, 3 para divorciados y 4 para viudos");
	estCivil = parseInt(estCivil);

	while( estCivil < 1 || estCivil > 4 || isNaN(estCivil))
	{
		estCivil = prompt("Ingrese: 1 para soltero, 2 para casado, 3 para divorciados y 4 para viudos");
		estCivil = parseInt(estCivil);
	}
	switch(estCivil)
	{
		case 1:
			estCivil = "Soltero";
			break;
		case 2:
			estCivil = "Casado";
			break;
		case 3:
			estCivil = "Divorciado";
			break;
		case 4:
			estCivil = "Viudo";
	}
	txtIdEstadoCivil.value = estCivil;

	sueldoIngresado = prompt("Ingrese su sueldo bruto: ");
	sueldoIngresado = parseInt(sueldoIngresado);

	while( sueldoIngresado < 8000 || isNaN(sueldoIngresado))
	{
		sueldoIngresado = prompt("Ingrese un sueldo válido: ");
		sueldoIngresado = parseInt(sueldoIngresado);
	}
	txtIdSueldo.value = sueldoIngresado;


	legajoIngresado = prompt("Ingrese su numero de legajo de cuatro cifras: ");
	legajoIngresado = parseInt(legajoIngresado);

	while(legajoIngresado > 9999 || legajoIngresado < 1000 || isNaN(legajoIngresado))
	{
		legajoIngresado = prompt("Coloque las 4 cifras del legajo: ");
		legajoIngresado = parseInt(legajoIngresado);
	}
	txtIdLegajo.value = legajoIngresado;


	nacionalidadIngresado = prompt("Ingrese su nacionalidad. En caso de ser Argentino 'A', Extranjero 'E', Nacionalizados 'N' ").toUpperCase();

	while( nacionalidadIngresado != "A" && nacionalidadIngresado != "E" && nacionalidadIngresado != "N")
	{
		nacionalidadIngresado = prompt("Reingrese correctamente su nacionalidad, 'A', 'E' o 'N': ").toUpperCase();
	}
	switch(nacionalidadIngresado)
	{
		case "A":
			nacionalidadIngresado = "Argentino";
			break;
		case "E":
			nacionalidadIngresado = "Extranjero";
			break;
		case "N":
			nacionalidadIngresado = "Nacionalizado";
	}
	txtIdNacionalidad.value = nacionalidadIngresado;

}
