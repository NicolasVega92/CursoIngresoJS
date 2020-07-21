/*
Nicolas Vega
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
/*
	if(edad > 17){
		alert("Eres mayor de edad");
	}else if(edad > 12){
		alert("Eres un adolescente");
	}else{
		alert("Eres un niño");
	}
*/
	//Usar este.
	if(edad > 17)
	{
		alert("Eres mayor de edad");
	}
	else
	{
		if(edad > 12) //Edad es menor a 18 por la linea 22
		{
			alert("Eres un adolescente");
		}
		else
		{
			alert("Eres un niño");
		}
	}


}//FIN DE LA FUNCIÓN