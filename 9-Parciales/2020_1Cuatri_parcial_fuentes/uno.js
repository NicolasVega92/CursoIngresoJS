
function mostrar()
{
	var producto;
	var precio;
	var cantidadUnidades;
	var marca;
	var i;
	var alcoholBarato;
	var banderaAlcohol;
	var alcoholBaratoMarca;
	var alcoholCantidad;
	var cantAlcohol;
	var cantBarbijo;
	var cantJabón;
	var cantCompraAlcohol;
	var cantCompraBarbijo;
	var cantCompraJabón;
	var promedio;
	var nombreProducto;


	banderaAlcohol = true;
	cantJabón = 0;
	cantBarbijo = 0;
	cantAlcohol = 0;
	cantCompraAlcohol = 0;
	cantCompraBarbijo = 0;
	cantCompraJabón = 0;
	promedio = 0;

	//DO siempre entra por lo menos una vez en el loop. la diferencia con el While. 
	//Usar FOR debido a que ya se la cantidad de loops que debe realizar el pedido. 
	for(var i = 0; i < 5 ; i++)
	{
		//PRODUCTO
		producto = prompt("Ingrese un producto: ");

		while(producto != "barbijo" && producto != "alcohol" && producto != "jabón")
		{
			producto = prompt("ERROR: Ingrese (alcohol - barbijo - jabón)");
		}

		//PRECIO
		precio = prompt("Ingrese el precio: ");
		precio = parseInt(precio);

		while( precio < 100 || precio > 300 || isNaN(precio))
		{
			precio = prompt("ERROR: Ingrese precio (100 - 300)");
			precio = parseInt(precio);
		}

		//CANTIDAD UNIDADES
		cantidadUnidades = prompt("Cuantas unidades desea?");
		cantidadUnidades = parseInt(cantidadUnidades);

		while(cantidadUnidades <= 0 || cantidadUnidades > 1000 || isNaN(cantidadUnidades))
		{
			cantidadUnidades = prompt("ERROR: ingrese una cantidad válida (1 - 1000)");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		//MARCA
		marca = prompt("De que marca?");


		//MAXIMO y MINIMO DE ALCOHOL con bandera
		//SUMA DE PRODUCTOS Y SUMA DE CANTIDADES DE UNIDADES
		switch(producto)
		{
			case "alcohol":
				if(banderaAlcohol == true)
				{
					alcoholBarato = precio;
					alcoholCantidad = cantidadUnidades;
					alcoholBaratoMarca = marca;
					banderaAlcohol = false;
				}
				else
				{
					if(alcoholBarato > precio)
					{
						alcoholBarato = precio;
						alcoholCantidad = cantidadUnidades;
						alcoholBaratoMarca = marca;
					}
				}

				cantCompraAlcohol++;
				cantAlcohol = cantAlcohol + cantidadUnidades;
				break;

			case "barbijo":
				cantCompraBarbijo++;
				cantBarbijo = cantBarbijo + cantidadUnidades;
				break;

			case "jabón":
				cantCompraJabón++;
				cantJabón = cantJabón + cantidadUnidades;
				break;

		}

	}



	//PROMEDIOS DE LAS COMPRAS
	if(cantJabón >= cantAlcohol && cantJabón >= cantBarbijo)
	{
		promedio = cantJabón / cantCompraJabón;
		promedio = promedio.toFixed(2);
		nombreProducto = "Jabón";
	}
	else
	{
		if(cantAlcohol >= cantJabón && cantAlcohol >= cantBarbijo)
		{
			promedio = cantAlcohol / cantCompraAlcohol;
			promedio = promedio.toFixed(2);
			nombreProducto = "Alcohol";
		}
		else
		{
			promedio = cantBarbijo / cantCompraBarbijo;
			promedio = promedio.toFixed(2);
			nombreProducto = "Barbijo";
		}
	}


	//RESPUESTAS
	document.write("El alcohol mas barato es de $"+alcoholBarato +" con "+alcoholCantidad +" unidades y es de marca "+ alcoholBaratoMarca+"<br>");
	document.write("-----------------------"+"<br>");
	document.write("El promedio de compra de la mayor unidad es de "+promedio+" y es de "+nombreProducto+"<br>");
	document.write("--------------------"+"<br>");
	document.write("Hay "+ cantJabón+" unidades de jabón"+"<br>");
}