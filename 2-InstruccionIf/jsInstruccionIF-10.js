function mostrar()
{
	var notaExamen;
	
	//Genero el número RANDOM entre 1 y 10
	notaExamen = Math.floor(Math.random() * 10) + 1;
	 
	if(notaExamen > 8)
	{
		alert("Excelente");
	}
	else
	{
		if(notaExamen > 3)
		{
			alert("Aprobo");
		}
		else
		{
			alert("Vamos, la proxima se puede.");
		}
	}

}//FIN DE LA FUNCIÓN