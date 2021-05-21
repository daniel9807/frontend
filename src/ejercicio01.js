function invertirDigitos(numero)
{ 
  var invertido = 0
  var resto = numero
  do {
    invertido = invertido * 10 + (resto % 10)
    resto = Math.floor(resto / 10)
  } while ( resto > 0 )
  return invertido
}

console.log(invertirDigitos(123456))
console.log(invertirDigitos(321))