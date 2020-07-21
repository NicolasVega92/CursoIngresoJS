function mostrar()
{
	var numero;
	
	//Genero el número RANDOM entre 1 y 10
	numero = Math.floor(Math.random() * 10) + 1;
	 
	if(numero > 8)
	{
		alert("Excelente, tu nota es "+ numero);
	}
	else
	{
		if(numero > 3)
		{
			alert("Aprobo su nota es "+ numero);
		}
		else
		{
			alert("Vamos, la proxima se puede. Tu nota fue "+ numero);
		}
	}

}//FIN DE LA FUNCIÓN