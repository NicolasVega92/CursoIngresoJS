function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Septiembre":
		case "Octubre":
			alert("Ya paso el frio");
			break;
		case "Diciembre":
		case "Enero":
		case "Febrero":
			alert("Falta para el invierno");
			break;
		default:
			alert("Y ahora?");
	}




}//FIN DE LA FUNCIÓN