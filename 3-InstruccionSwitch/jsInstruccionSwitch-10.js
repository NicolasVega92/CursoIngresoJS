function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;


	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			}
			break;
		
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cordoba":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
					break;
			}
			break;
		
		case "Otoño":
			default:
				alert("Se viaja");

		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
			}
			break;
	}

}//FIN DE LA FUNCIÓN