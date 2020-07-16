/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var totalHilos;

    largo = txtIdLargo.value;
    largo = parseInt(largo);

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    perimetro = largo * 2 + ancho * 2;
    totalHilos = 3 * perimetro;
    alert("Se deberan comprar "+ totalHilos+" metros de hilos");
}


function Circulo () 
{
    var radio;
    var perimetro;
    var totalHilos;

    radio = txtIdRadio.value;
    radio = parseInt(radio);

    perimetro = 2 * Math.PI * radio;
    totalHilos = 3 * perimetro;
    alert("Se deberan comprar "+totalHilos.toFixed(2)+" metros de hilo");

}


function Materiales () 
{
    var largo;
    var ancho;
    var cemento;
    var cal;

    largo = txtIdLargo.value;
    largo = parseInt(largo);

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    areaRectangulo = largo * ancho ;
    cemento = areaRectangulo * 2;
    cal = areaRectangulo * 3;

    alert("Se necesitan "+ cemento +" bolsas de cemento y "+ cal +" bolsas de cal" );
}