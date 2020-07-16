function mostrar()
{
	
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	if(edad > 17){
		alert("Tu eres mayor de edad");
	}else{
		alert("Tu eres menor de edad");
	}
}