
const array1 = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz"];

const array2 = [10, 20, 30, 40, 50, 10, 20];

const array3 = ["Hola", " devJumpers", " ,como estan?"]

//Ejercicio 1
/* Crear un programa que devuelva el primer elemento del array1 */
function PrimerElemento(array) {
    return array[0];
}

//Ejercicio 2
/* Crear un programa que devuelva el ultimo elemento del array1 */
function UltimoElemento(array) {
    return array[array.length - 1];
}

//Ejercicio 3
/* Crear un programa que devuelva el largo del array1 */
function largoArray(array) {
    return array.length;
}
//Ejercicio 4

/* Crear un programa que aumente cada entero (del array2) por 1 y devuelva el array*/

function aumenteUnEntero(array) {
    return array.map(element => element + 1)
}

//Ejercicio 5
/* Crear un programa que añade la estudiante "Sasha" al final de array1" y devuelva el array*/
function agregarElemento(array) {
    return array.pop("Sasha")
}
//Ejercicio 6
//Crear un programa que añade el estudiante "Ian" al comienzo del array1 y devuelve el array
function agregarElementoAlFinal(array){
    return array.shift("Ian");
}

// Ejercicio 7
//Crear un programa que Devuelve un string donde todas las palabras del array3 esten concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
function concatenarArray(array){
    return array.join(" ")
}

// Ejercicio 8
  //Crear un programa que Comprueba si "Marcos" existe dentro de "array1"
  // Devuelve "true" si está, o "false" si no está
function existeString(nombre,array){
    return array.includes(nombre);
}


// Ejercicio 9
//Crear un programa que Sume todos los enteros del array2 y devuelve el valor
function sumarIndice(array){
    return array.reduce((acum,sum)=>{
        return acum+sum; //return anidado está bien?
    })
}

// Ejercicio 10
//Crear un programa que Devuelve el número más grande del array2
function valorMasGrande(array){
    //Math max o sort?
    let arrayOrdenado=array.sort();
    return arrayOrdenado[arrayOrdenado.length-1]
}
//Ejercicio 11
//.sort() : Ordena los elementos del array y retorna el arreglo ordenado. Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.

//some() : Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array.some

//every() : Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada.

//concat() : Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

//includes() : Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.

//join() : Une todos los elementos de un array en una cadena. Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos.

//reduce() : Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.
// array.reduce(function(acumulador, elemento, índice, array){
//     // definimos el comportamiento que queremos
//     // implementar sobre el acumulador y el elemento
// 	// podemos indicar el valor inicial que por defecto es 0
// }, 0);


//indexOf() : Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.indexOf

//findIndex() : Retorna el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.findIndex

//fill() : Cambia todos los elementos de un array por un valor estático, desde el índice de inicio hasta el índice final. Retorna el array modificado.

//push() : Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

//pop() : Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

//shift() : Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

//unshift() : Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

//slice() : Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

//reverse() : Invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.

//splice() : Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

//lastIndexOf() : Busca un elemento en un array y devuelve su posición. Comienza buscando por el final del array. Retorna -1 si el elemento no se encontrara.

//flat() : Crea una nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

//isArray() : Determina si el valor pasado es un Array.

//from() : Crea una nueva instancia de Array a partir de un objeto iterable.
