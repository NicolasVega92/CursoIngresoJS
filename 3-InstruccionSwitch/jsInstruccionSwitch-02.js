function mostrar()
{
	/*
	2) De una compra debe ingresar una cantidad de productos vaidando los siguientes:
		marca, precio, peso, tipo (solido o liquido)
		a) informar peso total de la compra
		b) la marca del mas caro de los liquidos
		c) la marca del mas liviano de los solidos

	*/

	var respuesta;
	var marca;
	var precio;
	var peso;
	var tipo;
	var pesoTotal;
	var banderaLiquido;
	var banderaSolido;
	var pesoLivianoSolido;
	var marcaLivianoSolido;

	banderaSolido = true;
	banderaLiquido = true;
	pesoTotal = 0;
	respuesta = true;

	while( respuesta == true)
	{
		//MARCA
		marca = prompt("Ingrese la marca: ");
		while(!isNaN(marca))
		{
			marca = prompt("ERROR: Ingrese la marca: ");
		}	

		//PRECIO
		precio = prompt("Ingrese el precio:");
		precio = parseInt(precio);
		while(isNaN(precio) || precio < 1 )
		{
			precio = prompt("ERROR: Ingrese un precio válido:");
			precio = parseInt(precio);
		}

		//PESO
		peso = prompt("Ingrese el peso");
		peso = parseInt(peso);
		while(isNaN(peso) || peso < 1)
		{
			peso = prompt("ERROR: Ingrese el peso");
			peso = parseInt(peso);
		}

		//TIPO
		tipo = prompt("Ingrese el tipo");
		while(tipo != "liquido" && tipo != "solido")
		{
			tipo = prompt("ERROR: ingrese (liquido - solido) según corresponda");
		}

		respuesta = confirm("Desea continuar?");


		//a) informar peso total de la compra
		pesoTotal = pesoTotal + peso;

		//b) la marca del mas caro de los liquidos
		switch(tipo)
		{
			case "liquido":
				if(banderaLiquido == true || precio > precioMasCaroLiquido)
				{
					banderaLiquido = false;
					marcaMasCaroLiquido = marca;
					precioMasCaroLiquido = precio;
				}
				break;
			//c) la marca del mas liviano de los solidos
			case "solido":
				if(banderaSolido == true || peso < pesoLivianoSolido)
				{
					banderaSolido = false;
					pesoLivianoSolido = peso;
					marcaLivianoSolido = marca;
				}
				break;
		}
		
	}

	console.log("El peso total de la compra es de "+pesoTotal);
	if(banderaLiquido == false)
	{
		console.log("La marca del mas caro de los liquidos es de "+marcaMasCaroLiquido);
	}
	if(banderaSolido == false)
	{
		console.log("El mas liviano de los solidos es de marca "+marcaLivianoSolido+ " con "+pesoLivianoSolido+"kg de peso.");
	}


	/*
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


*/

}//FIN DE LA FUNCIÓN