var numero, centena, decena, unidad; 
numero = parseInt(prompt("ingrese un numero"));
                
    centena = Math.floor(numero/100);
    decena = Math.floor((numero % 100)/10);
    unidad = Math.floor((numero % 100)% 10);

    if (centena == unidad){
       console.log("el número es capicua");
    }
    else
    console.log("el número No es capicua ");
                  

                