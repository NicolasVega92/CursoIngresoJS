/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
    
    suma = precio1 + precio2 + precio3;

    alert("La suma de los precios es $"+ suma);
}


function Promedio () 
{
	var precio1;
    var precio2;
    var precio3;
    var suma;
    var promedioDePrecios;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    suma = precio1 + precio2 + precio3;

    promedioDePrecios = suma / 3;

    alert("El promedio de los precios es $"+promedioDePrecios.toFixed(2));
}


function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var suma;
    var precioMasIva;
    var iva;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    suma = precio1 + precio2 + precio3;

    iva = suma * 21 / 100;

    precioMasIva = suma + iva;

    alert("El precio final es de $"+precioMasIva.toFixed(2));
    //el toFixed() me permite limitar la cantidad de decimales

}