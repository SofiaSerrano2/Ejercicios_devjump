//Ejercicio
/* Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. */

//DECLARAMOS UNA VARIABLE DONDE VAMOS A CONCATENAR LAS CADENAS

//BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS

//PEDIMOS LA CADENA POR TECLADO

//SI LA VARIABLE RESULTADO ESTÁ VACÍA

//CONCATENAMOS SIN UTILIZAR GUIÓN


//SINÓ

//CONCATENAMOS CON GUIÓN


//MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM

//SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO

//Ejercicio
/* Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

let concatenar = () => {
    let texto = " ";
    let confirmar, cadenas;
    cadenas = " "
    do {
        confirmar = confirm("¿Quiere seguir ingresando texto?")
        texto = prompt("Ingrese texto")
        if (texto == " " || texto == null) {
            cadenas = cadenas + texto + " "
        }
        else if (texto != " " && texto != null) {
            cadenas = cadenas + texto + "-"
        }
    } while (confirmar == true)

    document.write(cadenas);
}


let ingresarNums = () => {
    let num=0;
    let sum=0;
    let confirmar=confirm("Quiere ingresar numeros?");
    while (confirmar == true) {
        num = Number(prompt("Ingresar Numeros"))
        
        if(isNaN(num)==false){
            sum = sum+num;
        }
        else{
            alert("Ingrese numeros porfis")
        }
        confirmar=confirm("Quiere ingresar numeros?"); 
    }
    return sum;
}

// document.write(ingresarNums());

let pedirNumero = () => {
    let numero = 0;
    let resultado = 0;
    let confirmar;
    do {
        numero = Number(prompt(`Ingrese un número`)) //Esto va a pedir un numero y te lo va a guardar en esta variable 
        if (isNaN(numero) === true) { //Le pregunto si numero "no es un numero" si es un string te devuelve como verdadero y
            alert(`Ingrese solo números`)
        }
        else{
            resultado = resultado + numero
        }
        confirmar = confirm(`Desea seguir ingresando?`)
    } while (confirmar) {
        document.write(resultado)
    }
}
pedirNumero()

