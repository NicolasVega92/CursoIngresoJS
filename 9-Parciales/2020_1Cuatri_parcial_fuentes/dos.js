function mostrar()
{
  var tipo;//validad("arena";"cal";"cemento") 
  var cantidadDeBolsas;
  var precioPorBolsa;
  var respuesta;
  var acumuladorDeBolsas;
  var precioBrutoTotal;
  var precioBrutoProducto;
  var porcentaje;
  var descuento;
  var precioConDescuento;
  var acumuladorCal;
  var acumuladorCemento;
  var acumuladorArena;
  var tipoConMasUnidades;
  var banderaDelPrimerProducto;
  var tipoMasCaro;
  var tipoMasCaroPrecio;


  banderaDelPrimerProducto="es el primero";
  acumuladorCal=0;
  acumuladorCemento=0;
  acumuladorArena=0;

  acumuladorDeBolsas=0;
  precioBrutoTotal=0;
  respuesta="s";
  while(respuesta=="s")
  {

  	tipo=prompt("ingrese tipo");
  	while(tipo!="arena"&&tipo!="cal"&&tipo!="cemento")
  	{
  		tipo=prompt("error, ingrese tipo");
  	}
  	cantidadDeBolsas=prompt("ingrese cantidad de bolsas");
  	cantidadDeBolsas=parseInt(cantidadDeBolsas);
  	while(cantidadDeBolsas<1)
  	{
  		cantidadDeBolsas=prompt("error ,ingrese cantidad de bolsas");
  		cantidadDeBolsas=parseInt(cantidadDeBolsas);
  	}



  	precioPorBolsa=prompt("ingrese cantidad de bolsas");
  	precioPorBolsa=parseInt(precioPorBolsa);
  	while(precioPorBolsa<1)
  	{
  		precioPorBolsa=prompt("error ,ingrese cantidad de bolsas");
  		precioPorBolsa=parseInt(precioPorBolsa);
  	}

  	acumuladorDeBolsas=acumuladorDeBolsas+cantidadDeBolsas;
  	precioBrutoProducto=cantidadDeBolsas*precioPorBolsa;
  	precioBrutoTotal=precioBrutoTotal+precioBrutoProducto;

  	if(banderaDelPrimerProducto=="es el primero")
  	{
  		banderaDelPrimerProducto="ya paso";
  		tipoMasCaro=tipo;
  		tipoMasCaroPrecio=precioPorBolsa;
  	}else
  	{
  		if(precioPorBolsa>tipoMasCaroPrecio)
  		{
  			tipoMasCaro=tipo;
  			tipoMasCaroPrecio=precioPorBolsa;
  		}
  	}





  	switch(tipo)
  	{
  		case "arena":
  			acumuladorArena=acumuladorArena+cantidadDeBolsas;
  			break;
  		case "cal":
  			acumuladorCal=acumuladorCal+cantidadDeBolsas;
  			break;
  		case "cemento":
  			acumuladorCemento=acumuladorCemento+cantidadDeBolsas;
  			break;
  	}








  	respuesta=prompt("seguir ?")
  }//termine

  if(acumuladorArena>acumuladorCemento&&acumuladorArena>acumuladorCal)
  {
  	//arena
  	tipoConMasUnidades="arena";
  }else
  {
  	if(acumuladorCal>acumuladorCemento)
  	{
  		tipoConMasUnidades="cal";
  	}else
  	{
  		tipoConMasUnidades="cemento";
  	}
  }




  if(acumuladorDeBolsas>30)
  {
  	porcentaje=25;

  }else
  {
  	if(acumuladorDeBolsas>10)
  	{
  		porcentaje=15;
  	}else
  	{
  		porcentaje=0;
  	}
  }





  if(porcentaje!=0)
  {
  	descuento=precioBrutoTotal*porcentaje/100;
  	precioConDescuento=precioBrutoTotal-descuento;
 	console.log("pagar con descuento: "+precioConDescuento);		
  }

 // El importe total a pagar , bruto sin descuento
 console.log("bruto sin descuento: "+precioBrutoTotal);
 console.log("el tipo mas comprado es: "+tipoConMasUnidades);
 console.log("el tipo mas caro  es: "+tipoMasCaro);

 

}
/*
function mostrar()
{
  var producto;
  var respuesta;
  var cantidadBolsas;
  var totalConDescuento;
  var totalSinDescuento;
  var descuentoMinimo;
  var descuentoMaximo;
  var precioArena;
  var precioCal;
  var precioCemento;
  var precio;
  var contadorDeBolsas;
  var contadorArena;
  var contadorCal;
  var contadorCemento;
  var masBolsas;
  var soloArena;
  var soloCal;
  var soloCemento;
  var masCaro;

  soloArena = 0;
  soloCal = 0;
  soloCemento = 0;
  contadorArena = 0;
  contadorCal = 0;
  contadorCemento = 0;
  precioArena = 10;
  precioCal = 15;
  precioCemento = 20;
  precio = 0;
  contadorDeBolsas = 0;
  respuesta = true;
  cantidadBolsas = 0;
  precioPorBolsa = 10;
  total = 0;
  totalConDescuento = 0;
  totalSinDescuento = 0;
  descuentoMaximo = 0.75;
  descuentoMinimo = 0.85;

  do
  {
    //Producto
    producto = prompt("Ingrese el producto: ");

    while(producto != "arena" && producto != "cal" && producto != "cemento")
    {
      producto = prompt("ERROR: Ingrese (arena - cal - cemento): ")
    }


    //CANTIDAD
    cantidadBolsas = prompt("Cuantas bolsas quiere?");
    cantidadBolsas = parseInt(cantidadBolsas);

    while(cantidadBolsas < 1 || isNaN(cantidadBolsas) )
    {
      cantidadBolsas = prompt("ERROR: Ingrese un monto válido mayor a 1: ");
      cantidadBolsas = parseInt(cantidadBolsas);
    }


    switch(producto)
    {
      case "arena":
        precio = precioArena * cantidadBolsas;
        contadorArena++;
        soloArena = soloArena + precio;
        break;
      
      case "cal":
        precio = precioCal * cantidadBolsas;
        contadorCal++;
        soloCal = soloCal + precio;
        break;
      
      case "cemento":
        precio = precioCemento * cantidadBolsas;
        contadorCemento++;
        soloCemento = soloCemento + precio;
        break;
    }


    totalSinDescuento = totalSinDescuento + precio;

    contadorDeBolsas = contadorDeBolsas + cantidadBolsas;


    //RESPUESTA
    respuesta = confirm("Desea continuar?");
  }
  while( respuesta == true);

  if(contadorDeBolsas > 30)
  {
    totalConDescuento = totalSinDescuento * descuentoMaximo;
  }
  else
  {
    if(contadorDeBolsas > 10)
    {
      totalConDescuento = totalSinDescuento * descuentoMinimo;
    }
  }


  //CONTADORES DE BOLSAS
  if(contadorCemento > contadorArena && contadorCemento > contadorCal)
  {
    masBolsas = "Cemento";
  }
  else
  {
    if(contadorCal > contadorArena && contadorCal > contadorCemento)
    {
      masBolsas = "Cal";
    }
    else
    {
      masBolsas = "Arena";
    }
  }

  //MAS CARO
  if(soloCemento > soloArena && soloCemento > soloCal)
  {
    masCaro = "Cemento";
  }
  else
  {
    if(soloCal > soloArena && soloCal > soloCemento)
    {
      masCaro = "Cal";
    }
    else
    {
      masCaro = "Arena";
    }
  }




  document.write("El importe a pagar en bruto es de $"+totalSinDescuento+"<br>");
  if(contadorDeBolsas > 10)
  {
    document.write("El importe a pagar con descuento es de $"+totalConDescuento+"<br>");
  }
  document.write("La mayor cantidad de bolsas es de "+masBolsas+"<br>");
  document.write("El mas caro de los productos fue: "+masCaro+"<br>");
}
*/