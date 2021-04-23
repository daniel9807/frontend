console.log(" Numero randomico:" , Math.random());

var variableGlobal = "variable de alcance global";
const varConstante = "constante durante ejecucion";
let varLetlocal = "ABC";
let varLetnumero = 123;

console.log("varible global"+variableGlobal);
console.log("constente"+varConstante);


{
    let varLetlocal = "ABC";
    console.log("varible global 2"+ variableGlobal);
    let varLetlocal= "ABC";

}
let evaluacionif = true;
if (evaluacionif) {
    console.log("adentro del if");
    let varLetnumeroX = 11;
    let varLetnumeroY = 76;
    console.log("operacion + = "+ (letnumeroX + letnumeroY));

}else{
    console.log("estamos en el else del if");

}
console.log("+------------------------selector-------------+");
let letkey = 3;
switch (letkey) {
    case 1:
        console.log("casi para 1");
        break;
    case 2:
        console.log("casi para 2");
        break;
    case 3:
        console.log("casi para 3");
        break;

    default:
        console.log("valor no determinado en el selector");
        break;
}
