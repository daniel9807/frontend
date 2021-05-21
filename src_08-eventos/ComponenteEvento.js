import React from "react"

console.log("componente capturador de evento en pantalla");
const ComponenteEvento = () => {
    console.log ("componenteEventos:. ");
    
    const eventoclick = (e)=>{
        console.log(e);
    }
    return (
        <>
        <h1>Eventos component react</h1>
        <h5>Capturar de Evento del click</h5>
        <hr></hr>
        <button onClick= {eventoclick}>Click Aquí</button>
        </>
    );
}
export default ComponenteEvento;