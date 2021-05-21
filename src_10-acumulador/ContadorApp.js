import React, { useState } from "react"

console.log("componente Contador o Acumulador con funciones");
const ContadorApp = ({valor_contador}) => {
    console.log (".:contadorApp:.");
    
    const [contador, setcontador] = useState(valor_contador);


    const funcionSumar = ()=>{
        setcontador(contador + 1);
        console.log("Contador = ", contador);
    }

    const funcionReinicia = ()=>{
        setcontador(valor_contador);
        console.log("Contador = ", contador);
    }
    const funcionRestar = ()=>{
        setcontador(contador - 1);
        console.log("Contador = ", contador);
    }
    return (
        <>
        <h1>Contador Componet react</h1>
        <h5>Acumulador de Clicks</h5>
        <hr></hr>
        <h1>Contador = {contador}</h1>
        <hr></hr>
        <button onClick= {funcionSumar}>Sumar + 1</button>
        <button onClick= {funcionReinicia}>.:Reniciar:.</button>
        <button onClick= {funcionRestar}> Restar - 1</button>

        </>
    );
}
export default ContadorApp;