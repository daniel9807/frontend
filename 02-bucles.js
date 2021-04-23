console.log("+-------------------------bucle-----------------+");

let limiteBucle = 10;
let contador = 0;
console.log("+ bucle: do while");
do {
    contador ++;
    console.log("contador;"+contador);

}while (contador < limiteBucle);

console.log("+ bucle: do while");
let letcondicion = true;

while (letcondicion) {
    let letrandom = Math.random();
    console.log("numero randomico: " +letrandom);
    if (letrandom ){
        letcondicion = false;
        console.log("salida del bucle: " + letcondicion);


    }
}

console.log("+ bucle: for");

let limitefor =20;

for (let index = 0; index < limitefor; index++) {
    let randomfort = Number.parseInt((Math.random()*10),10);
    console.log("indice for :" +index);
    console.log("random :" +index);
}
