console.log("+----------------string template---------+");

const apellido = "Muñoz";
let nombre = "daniel leandro";

let variableNum = 11; 

console.log("señor" +apellido+ "su multiplicacion es:"+(11*7));


console.log(`señor ${apellido} su multiplicacion es : ${variableNum * 7 }`);

console.log(`llamado a una funcion desde string temple ==>${fx_randomico(`xyz`)}`);
function fx_randomico(parmString){
    return ` numero random ${Math.random()*100} parametro >>>>> ${parmString}`;
}