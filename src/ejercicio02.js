let numero = 986,
    salida = [],
    cadenaNumero = numero.toString();

for (var i = 0, len = cadenaNumero.length; i < len; i += 1) {
    salida.push(+cadenaNumero.charAt(i));
}

console.log(salida);
for (var i = 0, sum = 0; i < salida.length; sum += salida[i++]);
console.log(sum);