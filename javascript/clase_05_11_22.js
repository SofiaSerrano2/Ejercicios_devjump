// Repaso
// Objetos.
let auto = {   //declaramos el objeto auto
    marca: null,
    modelo: null,
    color: null,
    motor: null,
    encendido: null, //confirm
    baul: 0, // carga (kg)
    portaEquipaje: 0, // carga (kg)
    cargatotal: null,
    encender: function () {
        if (this.encendido == true) {
            return `Encendido`
        } else { return `no se Encedió` }

    },
    apagar: function () {
        if (this.encendido == false) {
            return `, Apagado`
        } else { return `, brrrm *Ruido de motor*` }

    },
    infoAuto: function () {
        return `<br> La marca del auto es: ${this.marca} El modelo del auto es: ${this.modelo} El color del auto es: ${this.color} El motor del auto es: ${this.motor} La capacidad del baúl es: ${this.baul} La capacidad del porta equipaje es: ${this.portaEquipaje} En total la capacidad de carga total es: ${this.cargatotal}  Además el auto se encuentra ${(this.encendido == true) ? "Está Encendido" : "Está Apagado"}`
    }
}

// auto.marca = prompt("Ingrese la marca del vehiculo");
// auto.modelo = prompt("Ingrese el modelo que quiere llevar");
// auto.color = prompt("seleccione el color del vehiculo");
// auto.motor = prompt("elija su motor");
// auto.baul = Number(prompt("seleccione su capacidad en kg (baul)"));
// auto.portaEquipaje = Number(prompt("seleccione su capacidad en kg (portaEquipaje)"));
// auto.encendido = confirm("Está encendido");
// auto.cargatotal = auto.baul + auto.portaEquipaje;

//forma de cargar 
for (const propiedad in auto) {
    console.log(`este valor es del tipo ${typeof(auto[propiedad ])} y es esto ${auto[propiedad ]}`)
    if (typeof (auto[propiedad]) !== "function") {
        auto[propiedad] = prompt(` ingrese ${propiedad} del auto:`)
    }
    else if(typeof (auto[propiedad]) == "boolean"){
        auto[propiedad]= confirm(` esta ${propiedad}? si o no :`)
    }
}
document.write(auto.infoAuto())

//FORMA SIMPLIFICADA

// for (const propiedad in auto) {

//     if(typeof(auto[propiedad])!== "function"){

//         document.write(`este valor es del tipo ${typeof(auto[propiedad ])} y es esto ${auto[propiedad ]} <br>`)
//     }else if(propiedad=="encender"){
//         document.write(auto.encender())

//     }else if(propiedad=="apagar"){
//         document.write(auto.apagar())
//     }else if(propiedad=="infoAuto"){
//         document.write(auto.infoAuto())
//     }
// }




//FORMA MANUAL

// auto.cargatotal = auto.baul + auto.portaEquipaje
// document.write(auto)
// document.write(auto.marca)
// document.write(auto.modelo)
// document.write(auto.color)
// document.write(auto.motor)
// document.write(auto.cargatotal)

// auto.cargatotal = auto.baul + auto.portaEquipaje
// document.write(auto)

//Agregar info de carga total


// 2)
let pc = {
    mother: null,
    micro: null,
    placaVideo: null,
    ram: null,
    hd: null,
    monitor: null, // confirm
    precio: null, //
    precioMonitor: 27000,
    precioTotal: null, //
    infoPc: function () {
        return `La pc tiene ${this.mother}, la micro ${this.micro}, la placa de video ${this.placaVideo} tiene una ram de ${this.ram}, tiene una calidad hd de ${this.hd}, ${this.monitor == true ? `Tiene monitor` : `no tiene monitor`} El precio total es:${this.monitor == true ? this.precioTotal : this.precio}`

        // info de la pc que el/la usuari@ quiere comprar
    }
}

// pc.mother = prompt("Tipo de mother");
// pc.micro = prompt("Tipo de micro");
// pc.placaVideo = prompt("Tipo de placa de video");
// pc.ram = Number(prompt("Tipo de ram"));
// pc.hd = Number(prompt("Tipo de Calidad"));
// pc.monitor = confirm("¿Quiere monitor?");
// pc.precio = Number(prompt("Ingrese un monto"));
// pc.precioMonitor = 27000;
// pc.precioTotal = pc.precio + pc.precioMonitor;


// document.write(pc.infoPc());





// 3)
let persona = {
    apodo: null,
    vehiculo: null, //infoAuto
    pc: null, // infoPc
    destino: null,
    precioNafta: null, //precio
    precioHotel: null,
    precioPeaje: null,
    precioEstaciona: null,
    gastoTotal: null,
    infoPerso: function () {
        return `${this.apodo} se mudó a ${this.destino} con su ${pc.infoPc()} y se fué en su ${auto.marca} teniendo un gasto total de ${this.gastoTotal}`
    }
}


// persona.apodo = "Siwi"
// persona.vehiculo = auto.modelo
// persona.pc = pc.infoPc()
// persona.destino = "Miami"
// persona.precioNafta = 2000
// persona.precioHotel = 400
// persona.precioPeaje = 25
// persona.precioEstaciona = 5
// persona.gastoTotal = persona.precioNafta + persona.precioHotel + persona.precioPeaje + persona.precioEstaciona

// document.write(persona.infoPerso())