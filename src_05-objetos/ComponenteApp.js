import React from "react"

const persona = {
    nombre: "daniel leandro",
    apellidos: "muñoz castañeda",
    correo:"danielmc9807@hotmail.com",
}

const ComponenteApp = () => {
    console.log("componente con Objs");
    return (
        <>
        <h1>saludo desde un functional componnet´s react</h1>;
        <h5>retorno multilinea de un componente</h5>
        <hr></hr>
        <p>Objeto persona: {persona.nombre}{persona.apellidos}</p>
        <p>Email: {persona.correo}</p>
        <p>{JSON.stringify(persona, null, null)}</p>
        </>
    );
    
}

export default ComponenteApp;