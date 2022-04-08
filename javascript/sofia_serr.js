let devolverString = str => str;


let suma = (x, y) => x + y;

let resta = (x, y) => x - y;

let multiplica = (x, y) => x * y;

let divide = (x, y) => x / y;

let sonIguales = (x, y) => x == y;

let tienenMismaLongitud = (str1, str2) => str1.length == str2.length;

let menosQueNoventa = num => num < 90;

let mayorQueCincuenta = num => 50 < num;

let obtenerResto = (x, y) => x % y;

let esPar = num => num % 2;

let esImpar = num => num % 2 != 0;

let elevarAlCuadrado = num => Math.pow(num, 2);

let elevarAlCubo = (num) => Math.pow(num, 3);
let elevar = (num, exponent) => Math.pow(num, exponent);

let redondearNumero = num => Math.round(num);

let redondearHaciaArriba = num => Math.ceil(num);

let numeroRandom = () => Math.random();

let esPositivo = numero => {
    return (numero > 0) ? "Es positivo"
        : (numero < 0) ? "Es negativo"
            : false;
}

let agregarSimboloExclamacion = str => str + "!"; 

let combinarNombres=(nombre, apellido) => nombre + " " + apellido;

let obtenerSaludo = nombre=> `Hola ${nombre}!`;

let obtenerAreaRectangulo=(alto, ancho) => alto * ancho;

let retornarPerimetro=lado=> lado * 4;

let areaDelTriangulo =(base, altura) =>(base * altura) / 2;

let deEuroAdolar=euro => (euro * 1.20)

let esVocal=letra=> {
    // let patr = /[aeiou]/;
    // let longLetr = letra.lenght;  
    // if(longLetr===1){
    //   if(patr.test(letra)){
    //     return "Es vocal";
    //   }
    //   else{
    //     return "Dato incorrecto"
    //   }
    // }
    // else{
    //   return "Dato incorrecto"
    // }
    if (letra.length === 1) {
        if (`a` === letra || `e` === letra || `i` === letra || `o` === letra || `u` === letra) {
            return "Es vocal";
        }
        else {
            return "Dato incorrecto";
        }
    }
    else {
        return "Dato incorrecto";
    }
}

console.log((esVocal("v")));