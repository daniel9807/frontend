import React from 'react';
import ReactDOM from 'react-dom';

//Hoja de estilos 
import "./index.css"

const saludo = <h1>Hola desde app porfia</h1>;

const divRoot = document.querySelector('#root');

ReactDOM.render(saludo, divRoot);
