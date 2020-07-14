/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
	var num2;
	var suma;	

	num1 = parseInt(txtIdNumeroUno.value);
	num2 = parseInt(txtIdNumeroDos.value);

	suma = num1 + num2;
	alert("La suma es "+suma);
}

function restar()
{
	var num1;
	var num2;
	var resta;

	num1 = parseInt(txtIdNumeroUno.value);
	num2 = parseInt(txtIdNumeroDos.value);

	resta = num1 - num2;
	alert("La resta es "+resta);
}

function multiplicar()
{ 
	var num1;
	var num2;
	var multiplicacion;

	num1 = parseInt(txtIdNumeroUno.value);
	num2 = parseInt(txtIdNumeroDos.value);

	multiplicacion = num1 * num2;
	alert("La multiplicaion es "+multiplicacion);
}

function dividir()
{
	var num1;
	var num2;
	var dividir;

	num1 = parseInt(txtIdNumeroUno.value);
	num2 = parseInt(txtIdNumeroDos.value);

	dividir = num1 / num2;
	alert("La division es "+dividir);
}

