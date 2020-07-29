function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	horaDelDia = parseInt(horaDelDia);

	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
		
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
			alert("Es de noche");
			break;
		
		default:
			alert("Es de tarde");
	}

}//FIN DE LA FUNCIÓN