

function sumar (num1, num2, nombre){
    document.write(`${nombre} el resultado de la suma de los números es : ${num1 + num2}<br>`);
}

// sumar(parseInt(prompt("Ingrese el primer numero")),Number(prompt("Ingrese el segundo numero")), prompt(`Decime tu nombre`)); 

//* Resta

function resta(num1,num2,nombre){
    document.write(`${nombre} el resultado de la resta de los numeros que ingreso es: ${num1-num2}`)
}
// resta(parseInt(prompt("Ingrese el primer numero")),parseInt(prompt("Ingrese el segundo numero")),prompt("Ingrese su nombre"))

//*Multiplicacion
function multipicar(num1,num2,nombre){
    document.write(`${nombre} el resultado de la multiplicación de los numeros que ingreso es: ${num1*num2}`)
}
// multipicar(parseInt(prompt("Ingrese el primer numero")),parseInt(prompt("Ingrese el segundo numero")),prompt("Ingrese su nombre"))

 
//*Division
function dividir(num1,num2,nombre){
    document.write(`${nombre} el resultado de la división de los numeros que ingreso es: ${num1/num2}`)
}
// dividir(parseInt(prompt("Ingrese el primer numero")),parseInt(prompt("Ingrese el segundo numero")),prompt("Ingrese su nombre"))

function main(){
    let num1= parseInt(prompt("Ingrese el primer numero"));
    let num2=Number(prompt("Ingrese el segundo numero"));
    let nombre= prompt(`Decime tu nombre`);

    sumar(num1,num2,nombre); 
    document.write(`<br>`)
    resta(num1,num2,nombre);
    document.write(`<br>`)
    multipicar(num1,num2,nombre);
    document.write(`<br>`)
    dividir(num1,num2,nombre);
}

main()