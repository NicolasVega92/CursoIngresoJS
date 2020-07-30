/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	// se deben negar las dos opciones para que lo vuelva a pedir diferente de los numeros
	{
		sexoIngresado=prompt("Debe ingresar una opción válida: f o m ");
	}


	txtIdSexo.value = sexoIngresado;

}//FIN DE LA FUNCIÓN