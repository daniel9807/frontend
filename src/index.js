<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';

//Hoja de estilos 
import "./index.css"
// componentes creados 


import ContadorApp from './ContadorApp';





const divRoot = document.querySelector('#root');

ReactDOM.render(<ContadorApp valor_contador = {0}/>, divRoot);
=======

var numero,centena,decena,unidad; 
numero = parseInt(prompt("ingrese un numero"));
                
    centena = Math.floor(numero/100);
    decena = Math.floor((numero % 100)/10);
    unidad = Math.floor((numero % 100)% 10);

    if (centena == unidad){
       console.log("el número es capicua");
    }
    else
    console.log("el número No es capicua ");
                  

                
>>>>>>> 3613b4bf10ad58fc735a804f3ed7e42492d7603d
