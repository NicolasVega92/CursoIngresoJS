function mostrar()
{
	var edad;
	var estado;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	estado = estadoCivil.value;

	if(estado == "Soltero"){
		if(edad > 17){
			alert("Es soltero y no es menor");
		}
	}

	


}//FIN DE LA FUNCIÓN