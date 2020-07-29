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
    var descuento;

    

    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);

    compania = Marca.value;

    precio = cantidadLamparas * 35;    
    precioFinal = 0;
    descuento = 0;
    impuesto = 0;


    /*


    if( cantidadLamparas > 5)
    {
        precioFinal = precio - (precio * 0.5);
    }
    else
    {
        if(cantidadLamparas == 5)
        {
            if(compania == "ArgentinaLuz")
            {
                precioFinal = precio - (precio * 0.4);
            }
            else
            {
                precioFinal = precio - (precio * 0.3); 
            }
        } 
        else
        {
            if(cantidadLamparas == 4)
            {
                if(compania == "ArgentinaLuz" || compania == "FelipeLamparas" )
                {
                    precioFinal = precio - (precio * 0.25);
                }
                else
                {
                    precioFinal = precio - (precio * 0.20);
                }
            }
            else
            {
                if(cantidadLamparas == 3)
                {
                    if(compania == "ArgentinaLuz")
                    {
                        precioFinal = precio - (precio * 0.15);
                    }
                    else
                    {
                        if(compania == "FelipeLamparas")
                        {
                            precioFinal = precio - (precio * 0.10);
                        }
                        else
                        {
                            precioFinal = precio - (precio * 0.05);
                        }
                    }
                } 
            }
        }
    }

    if( precioFinal > 120)
    {
        impuesto = precioFinal * 0.1;
        alert("Usted pago $"+ impuesto +" de IIBB" )
    }

    txtIdprecioDescuento.value = precioFinal + impuesto;

    */

    if(cantidadLamparas < 3)
    {
        precioFinal = precio;
        txtIdprecioDescuento.value = precioFinal;
    }
    else
    {
        switch(cantidadLamparas)
        {
            case 5:
                switch(compania)
                {
                    case "ArgentinaLuz":
                        descuento = 0.4;
                        break;
                    default:
                        descuento = 0.3;
                }
                break;

                /*
                if(compania == "ArgentinaLuz")
                {
                    descuento = 0.4;
                    //precioFinal = precio - (precio * 0.4);
                }
                else
                {
                    descuento = 0.3;
                }     
                break;       
                */
            case 4:
                switch(compania)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 0.25;
                        break;
                    default:
                        descuento = 0.2;
                }
                break;
                /*
                if(compania == "ArgentinaLuz" || compania == "FelipeLamparas")
                {
                    descuento = 0.25;
                }
                else
                {
                    descuento = 0.2;
                }
                break; 
                */
            case 3:
                switch(compania)
                {
                    case "ArgentinaLuz":
                        descuento = 0.15;
                        break;
                    
                    case "FelipeLamparas":
                        descuento = 0.1;
                        break;
                    
                    default:
                        descuento = 0.05;
                }
                break;
                /*
                if(compania == "ArgentinaLuz")
                {
                    descuento = 0.15;
                }
                else
                {
                    if(compania == "FelipeLamparas")
                    {
                        descuento = 0.10;
                    }
                    else
                    {
                        descuento = 0.05;
                    }
                }
                break; 
                */
    
            default:
                descuento = 0.5;
        }
    
    
        precioFinal = precio - (precio * descuento);
    
    
        if( precioFinal > 120)
        {
            impuesto = precioFinal * 0.1;
            alert("Usted pago $"+ impuesto +" de IIBB" )
        }
    
    }

    txtIdprecioDescuento.value = precioFinal + impuesto;
}
