/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var compania;
    var precio;
    var precioFinal;
    var impuesto;
    var precioFinalConImpuesto;

    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);

    compania = Marca.value;

    precio = cantidadLamparas * 35;    


    /*
    TIENE Q SER 
    IF (-----)
    {

    }
    ELSE
    {

    }
    
    IF(----)
    {

    }
    */









    if( cantidadLamparas > 5)
    {      
        precioFinal = precio - (precio * 0.5);

        if(precioFinal < 121)
        {
            txtIdprecioDescuento.value = precioFinal;  
            alert("Usted pago $"+precioFinal);
        }   
    }
    else if( cantidadLamparas == 5)
    {
        if(compania == "ArgentinaLuz")
        {
            precioFinal = precio - (precio * 0.4);
            txtIdprecioDescuento.value = precioFinal;  
            alert("Usted pago $"+precioFinal); 
        }
        else
        {
            precioFinal = precio - (precio * 0.3);
            txtIdprecioDescuento.value = precioFinal;   
        }
    }
    else if( cantidadLamparas == 4)
    {
        if(compania == "ArgentinaLuz" || compania == "FelipeLamparas")
        {
            precioFinal = precio - (precio * 0.25);
            txtIdprecioDescuento.value = precioFinal;  
            alert("Usted pago $"+precioFinal);
        }
        else
        {
            precioFinal = precio - (precio * 0.2);
            txtIdprecioDescuento.value = precioFinal;  
            alert("Usted pago $"+precioFinal);
        }
    }
    else if( cantidadLamparas == 3)
    {
        if(compania == "ArgentinaLuz")
        {
            precioFinal = precio - (precio * 0.15);
            txtIdprecioDescuento.value = precioFinal;  
            alert("Usted pago $"+precioFinal);
        }
        else
        { 
            if(compania == "FelipeLamparas")
            {
                precioFinal = precio - (precio * 0.10);
                txtIdprecioDescuento.value = precioFinal;  
                alert("Usted pago $"+precioFinal);
            }
            else
            {
                precioFinal = precio - (precio * 0.05);
                txtIdprecioDescuento.value = precioFinal;  
                alert("Usted pago $"+precioFinal);
            }
        }
    }
    else
    {
        precioFinal = precio;
        txtIdprecioDescuento.value = precioFinal;  
        alert("Usted pago $"+precioFinal);
       
    }

    if(precioFinal > 120)
    {
        impuesto = precioFinal * 0.1; 
        precioFinalConImpuesto = precioFinal + impuesto;
        txtIdprecioDescuento.value = precioFinalConImpuesto;
        
        alert("Usted pago $"+precioFinalConImpuesto+" siendo $"+impuesto+" el monto del impuesto");
    }
}
