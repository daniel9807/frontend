const taller_vehiculo = {
    
    KmPorLitro: '',
    RadioLlantas: 5,
    Color: '',
    Encendido: false,
    CantidadCombustible: 3,
    NewCantidadC: 0,
    kms: 0,
    capacidadTanque: 100,
    Aceleracion: 0,

    RecorridoPorGiro(){
      //Para saber cuanto recorre el vehiculo depende del tamaño de la llanta
      //Para ello debemos encontrar el Perimetro de la llanta ya que es lo que va a recorrer cada vuelta => Usamos  2Pi multiplicado por r
      console.log(`Lo que recorre con un giro de llanta es: ${this.RadioLlantas*(2*3.14)} m/s`);

    },

    Tanquear(){ 
    
        if(this.CantidadCombustible < this.capacidadTanque){
           this.CantidadCombustible = this.CantidadCombustible + Math.round(Math.random())
            console.log(`Combustible = ${this.CantidadCombustible}`);
        }

    },

    Encender(){
       if(this.CantidadCombustible >= 2){
           this.Encendido = true;
           console.log('El vehiculo esta encendido');
       }else{
           console.log('El vehiculo esta apagado');
       }
    },

    Acelerar(){
    
       if(this.CantidadCombustible >= 2){
        console.log('El vehiculo esta encendido, puede acelerar...');
       do{ 
        //Acelerar en base a un numero random...
        this.Aceleracion = this.Aceleracion + Math.round(Math.random()*10)
        console.log(`El vehiculo acelera con una velocidad de ${this.Aceleracion} km/s`);
        //RESTAR CONSUMO.......................
        this.CantidadCombustible = this.CantidadCombustible-this.Aceleracion
        console.log(`El combustible restante es: ${this.CantidadCombustible} galones`);
        if(this.CantidadCombustible <=0){
            console.log('Sin combustible');
            break;
        }
       }
       while(this.Aceleracion > 0);
       
    }

    },

    Apagar(){
       if(this.CantidadCombustible <= 0){
           this.Encendido = false;
           console.log('El vehiculo esta sin combustible, se apagará');
    }
 }

}
let obj = Object.create(taller_vehiculo);

obj.Encender();
obj.RecorridoPorGiro();
obj.Tanquear();
obj.Acelerar();
obj.Apagar();