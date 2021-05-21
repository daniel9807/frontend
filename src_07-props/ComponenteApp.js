import React from "react"

const persona = {
    nombre: "daniel leandro",
    apellidos: "muñoz castañeda",
    correo:"danielmc9807@hotmail.com",
}

const ComponenteApp = (props) => {
    console.log("componente  parametros props");
    console.log ("parametro 1:", props.parm01);
    console.log ("parametro 2:", props.parm02);
    console.log ("parametro 3:", props.parm03);
    
    return (
        <>
        <h1>saludo desde un functional componnet´s react</h1>;
        <h5>multiliparametros props.</h5>
        <hr></hr>
        <p>parametros 01 {props.parm01}</p>
        <p>parametros 02 {props.parm02}</p>
        <p>parametros 03 {props.parm03}</p>
        <hr></hr>
        <p>{JSON.stringify(persona, null, null)}</p>
        </>
    );
    
}

ComponenteApp.defaultProps = {
    parm03: "Sin Valores"
}

export default ComponenteApp;