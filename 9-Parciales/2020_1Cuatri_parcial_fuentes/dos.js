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
