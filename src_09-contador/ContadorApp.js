import React, { useState } from "react"

console.log("componente Contador o Acumulador");
const ContadorApp = ({valor_contador}) => {
    console.log (".:contadorApp:. ");
    
    const [contador, setcontador] = useState(valor_contador);


    const contarclick = ()=>{
        setcontador(contador + 1);
        console.log("Contador = ", contador);
    }
    return (
        <>
        <h1>Contador Componet react</h1>
        <h5>Acumulador de Clicks</h5>
        <hr></hr>
        <h1>Contador = {contador}</h1>
        <hr></hr>
        <button onClick= {contarclick}>Click + 1</button>
        </>
    );
}
export default ContadorApp;