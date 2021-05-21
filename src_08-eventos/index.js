import React from 'react';
import ReactDOM from 'react-dom';

//Hoja de estilos 
import "./index.css"
// componentes creados 

import ComponenteEvento from  "./ComponenteEvento"





const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteEvento/>, divRoot);
