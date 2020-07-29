function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var tarifa = 15000;
	var porcentaje = 0;
	var precioFinal = 0;



	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 1.2;
					break;
				case "Cordoba":
					porcentaje = 0.9;
					break;
				case "Mar del plata":
					porcentaje = 0.8;
					break;
				default:
					precioFinal = 15000;
			}
			break;
		
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 0.8;
					break;
				case "Cordoba":
				case "Cataratas":
					porcentaje = 1.1;
					break;
				case "Mar del plata":
					porcentaje = 1.2;
					break;
			}
			break;
		
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 1.1;
					break;
				
				default:
					precioFinal = 15000;
			}
			break;
	}

	precioFinal = tarifa * porcentaje;
	alert("El precio a abonar es de $"+precioFinal);


}//FIN DE LA FUNCIÓN