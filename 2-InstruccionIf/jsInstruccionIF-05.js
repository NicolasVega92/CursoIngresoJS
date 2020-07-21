function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	/*
	if(edad < 13 || edad > 17){
		alert("No eres adolescente");
	}
	//tomo la edad  
	*/

	if(!(edad > 12 && edad < 18)){
		alert("No eres adolescente");
	}

}//FIN DE LA FUNCIÓN