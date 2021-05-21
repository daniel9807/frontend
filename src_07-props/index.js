import React from 'react';
import ReactDOM from 'react-dom';

//Hoja de estilos 
import "./index.css"
// componentes creados 

import ComponenteApp from  "./ComponenteApp"





const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteApp parm01= "0001" parm02 = "xxxxx0044"/>, divRoot);
