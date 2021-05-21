import React from "react"

const persona = {
    nombre: "daniel leandro",
    apellidos: "muñoz castañeda",
    correo:"danielmc9807@hotmail.com",
}

const ComponenteApp = ({parm01, parm02, parm03 = "sin valor"}) => {
    console.log("componente son varios parametros");
    console.log ("parametro 1:",parm01);
    console.log ("parametro 2:",parm02);
    console.log ("parametro 3:",parm03);
    
    return (
        <>
        <h1>saludo desde un functional componnet´s react</h1>;
        <h5>multiliparametros</h5>
        <hr></hr>
        <p>parametros 01 {parm01}</p>
        <p>parametros 02 {parm02}</p>
        <p>parametros 03 {parm03}</p>
        <hr></hr>
        <p>{JSON.stringify(persona, null, null)}</p>
        </>
    );
    
}

export default ComponenteApp;