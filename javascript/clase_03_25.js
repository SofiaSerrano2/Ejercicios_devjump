// Ejercicio 1: 
//Escribe un  programa que pida 3 números y escriba en la pantalla el mayor de los tres.
//Ejercicio 2: 
//Escribe un programa que pida un número y diga si es divisible por 2
//Ejercicio 3: 
//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */
// 2, 3, 5 o 7 
// let num1 = parseFloat(prompt(`Ingrese un numero.`));
// let num2 = parseFloat(prompt(`Ingrese un numero por segunda vez.`));
// let num3 = parseFloat(prompt(`Ingrese un numero por tercera vez.`));
// if (num1 > num2 && num1 > num3){
//     document.write(`El ${num1} es el mayor de los tres numeros ingresados.`);
// } else if (num2 > num1 && num2 > num3){
//     document.write(`El ${num2} es el mayor de los tres numeros ingresados.`);
// } else if (num3 > num2 && num3 > num1){
//     document.write(`El ${num3} es el mayor de los tres numeros ingresados.`);
// } else if (num1==num2 && num1>num3){
//     document.write(`El primer y segundo número ingresados son los mayores.`);
// } else if (num1==num3 && num1>num2){
//     document.write(`El primer y tercer número ingresados son los mayores.`);
// } else if (num2==num3 && num2>num1){
//     document.write(`El segundo y tercer ingresados son los mayores.`);
// } else if (num1==num2 && num2==num3){
//     document.write(`Los tres números ingresados son iguales.`);
// } else {
//     document.write(`ERROR! Por favor, ingrese en todos los campos un número.`)
// }

//Ejercicio 3
let num = parseFloat(prompt(`Ingrese un numero`));
if(num%2==0){
    document.write(`El número ${num} es divisible por 2`);
}
else if(num%3==0){
    document.write(`El número ${num} es divisible por 3`);
}

else if(num%5==0){
    document.write(`El número ${num} es divisible por 5`);
}

else if(num%7==0){
    document.write(`El número ${num} es divisible por 7`);
}

else{
    document.write(`Ingresar un numero por favor`);
}