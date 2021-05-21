console.log("+-----------------objetos--------------+");

const persona = {
    nombre: "daniel leandro",
    apellidopaterno: "Muñoz",
    apellidomaterno: "Castañeda",
    fechadenacimiento: "1998-01-07",
     direccion:{
        viaprincipal: "calle",
        numerovia: "62",
        nombrevia:"porfia",
        placa:"44N-21",
        barrio:"ciudad porfia",
        locacion:"sur oriente",
        comuna:"8",
    }
    
}

const humano = {
  cabeza: "redonda",
  ojos:"redondos y claros",
  boca:"con buen aliento",
  orejas:"con oido bionico",
  brazos:"con musculos",
  dedos:"con uñas y mugre",

     estremidadin:{
        piernas:"con tatuajes",
        gluteos:"big ",
        pies:"dedos",
        dedos2:"con un buen pedicure",

        superpoder:{
            volar:"sin limites",
            insible:"cuando se pone nervioso",
            fuerza:"100",
            velocida:"99",
            nombredepeliculas:{
                tarantino:"malditos bastardos",


            }

        }
        

    }
}

console.table(persona);
console.table(humano);

let otrapersona01 = {...persona}

otrapersona01.nombre = "daniel leandro"
otrapersona01.apellido= "muñoz castañeda"
otrapersona01.fechanacimiento = "1998-07-07"

console.log("+--------------------------------------+");
console.table(persona);
console.table(otrapersona01);

console.log("+------------------objetos dinamico----------+");
const personadinamica = {
    nombre: "daniel leandro",
    apellidopaterno: "Muñoz",
    apellidomaterno: "Castañeda",
    fechadenacimiento: "1998-01-07",
     direccion:{
        viaprincipal: "calle",
        numerovia: "62",
        nombrevia:"porfia",
        placa:"44N-21",
        barrio:"ciudad porfia",
        locacion:"sur oriente",
        comuna:"8",
    },
    fxnombrecompleto(){
        console.log(`mi nombre es ${this.nombre} ${this.apellidopaterno} ${this.apellidomaterno} `);

    }
    
};

//let obj = Object.create(personadinamica)
//let obj = {...personadinamica};
//obj.nombre = "doris"
//obj.apellidomaterno = "pava"
//obj.fxnombrecompleto();


//console.table(obj);


console.log("+------------ejemplo dinamico humano---------+");

const humanodinamico = {
    cabeza: "redonda",
    ojos:"redondos y claros",
    boca:"con buen aliento",
    orejas:"con oido bionico",
    brazos:"con musculos",
    dedos:"con uñas y mugre",
  
       estremidadin:{
          piernas:"con tatuajes",
          gluteos:"big ",
          pies:"dedos",
          dedos1:"con un buen pedicure",
  
          superpoder:{
              volar:"sin limites",
              insible:"cuando se pone nervioso",
              fuerza:"100",
              velocida:"99",
              nombredepeliculas:{
                  tarantino:"malditos bastardos",
  
  
              }
  
          }
          
  
      },
      fxhumanocompleto(){
        console.log(`mi cabeza es ${this.cabeza} mis dedos estan  ${this.dedos}  mi pelicula favorita ${this.tarantino}`);
    }
};

let obj = {...humanodinamico};
obj.cabeza = "cuadrada"
obj.dedos = "limpios"
obj.fxhumanocompleto();


console.table(obj);
console.log("+--------------fin programa----------+");




