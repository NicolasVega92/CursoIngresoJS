/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	nombre = txtIdNombre.value; //dato obtenido del id del nombre
	edad = txtIdEdad.value; //dato obtenido del id de la edad

	alert("Usted se llama "+nombre+" y tiene "+edad+" años");
}

