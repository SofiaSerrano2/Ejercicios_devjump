// Ejercicio 1: Escribe un  programa que pida 3 números y escriba en la pantalla el mayor de los tres.

//Ejercicio 2: Escribe un programa que pida un número y diga si es divisible por 2

//Ejercicio 3: Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */

// let num1=parseFloat(prompt("Ingrese número 1"));
// let num2=parseFloat(prompt("Ingrese número 2"));
// let num3=parseFloat(prompt("Ingrese número 3"));

// let numMayor = (num1>num2 && num1>num3) ? `el número ${num1} es el mayor de los 3`
//                 : (num2>num1 && num2>num3) ? `el número ${num2} es el mayor de los 3`
//                 : (num3>num1 && num3>num2) ? `el número ${num3} es el mayor de los 3`
//                 : (num3==num1 && num3>num2) ? `el número ${num3} y número ${num1} son los mayores`
//                 : (num2==num1 && num2>num3) ? `el número ${num2} y número ${num1} son los mayores`
//                 : (num2==num3 && num2>num1) ? `el número ${num2} y número ${num3} son los mayores`
//                 : (num2==num3 && num2==num1) ? `Los tres numero son iguales`
//                 :`Ingrese numero distintos o ingrese numeros por favor`;

// document.write(numMayor);

// Ejercicio 2
// let numdiv = parseInt("ingrese un número entero");
// let result = (numdiv%2==0) ? `Es divisible`
//             : `No es divisible`;
// document.write(result);

//Ejercicio 3

let numIngr = parseFloat(prompt("ingrese un número entero"));

let resultado = (numIngr%2==0) ? `${numIngr} Es divisible por 2`
                : (numIngr%3==0) ? `${numIngr} Es divisible por 3`
                : (numIngr%5==0) ? `${numIngr} Es divisible por 5`
                : (numIngr%7==0) ? `${numIngr} Es divisible por 7`
                : `Ingrese un numero por favor`;

document.write(resultado);