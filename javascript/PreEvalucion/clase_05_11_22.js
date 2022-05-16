// Repaso
// Objetos.

// 1)
let auto = {   //declaramos el objeto auto
    marca:null ,
    modelo: null ,
    color: null ,
    motor: null ,
    encendido: null, //confirm
    baul: null, // carga (kg)
    portaEquipaje: null, // carga (kg)
    cargatotal: null,
    encender : function () {
    // Metodo encender
        return (this.encendido==true) ? "Esta encendido" : "No está encendido";
    },
    apagar : function () {
    //Metodo encender
    return (this.encendido==true) ? "Esta encendido" : "No está encendido";

    },
    infoAuto : function (){
    // informacion del auto + info sobre encendido.
    }
}
// auto.marca=prompt("Ingresar marca")
// auto.modelo=prompt("Ingresar marca")
// auto.motor=prompt("Ingresar marca")

auto.baul=prompt("Ingresar marca")
auto.encendido=confirm("Lo quiere encender?")
// auto.portaEquipaje= prompt(""),
// auto.cargatotal=auto.baul + auto.portaEquipaje
document.write(auto)



//Agregar info de carga total

// 2)

let pc = {
    mother : null,
    micro: null,
    placaVideo: null,
    ram: null,
    hd:null,
    monitor: null, // confirm
    precio:null, //
    precioMonitor: 27000,
    precioTotal:null, //
    infoPc : function () {
// info de la pc que el/la usuari@ quiere comprar
    }
}

// 3) 

let persona = {
    apodo: null,
    vehiculo: null, //infoAuto
    pc: null , // infoPc
    destino: null ,
    precioNafta: null , //precio
    precioHotel: null , 
    precioPeaje: null,
    precioEstaciona: null,
    gastoTotal: null,
    infoPerso: function (){
        // apodo vehiculo pc destino gasto total
    }

}
