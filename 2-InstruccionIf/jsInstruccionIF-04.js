function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad > 12 && edad < 18){
		alert("Eres un adolescente");
	}else{
		alert("No eres un adolescente");
	}


	// if(edad > 12){
	// 	if(edad < 18){
	// 		alert("Eres un adolescente");
	// 	}
	// }

}//FIN DE LA FUNCIÓN