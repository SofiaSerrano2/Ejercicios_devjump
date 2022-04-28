// Ejercicio  arrays

// 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
// Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo
// script:
// (vamos a suponer que esa es la orden de clasificación de un concurso)
const clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz", "Eduardo"];


// 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
//  (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion)
// script:
function clasificacionActual(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}
clasificacionActual(clasificaciones);
// 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:

// a)Leon adelanta a Agostina
// script:
function CambioAdelanto(array, adelantado, atrasado) {
    //**TODO  */
    for (let index = 0; index < array.length - 1; index++) {
        let guardar;
        if (array[index] == adelantado) {
            // array[index] = atrasado;
            // array[index - 1] = adelantado;
            array.splice(index, 1,atrasado);
            array.splice(index-1, 1,adelantado);
        }
    }
    return array;
}
// console.log(CambioAdelanto(clasificaciones, "Leon", "Agustina"))
// b)Eduardo es descalificado y se elimina del concurso
// script:
function descalificado(array, eliminado) {
    for (let index = 0; index < array.length; index++) {
        if (eliminado == array[index]) {
            array.splice(index, 1);
        }
    }
    return array;
}
// console.log(descalificado(clasificaciones, "Eduardo"))
// c)Detrás de Marcos y antes de Franco se clasifican dos nuevos concursantes: Julieta y Martina, en ese orden
// script:
let nuevosConcursantesMetodos = (array, nuevo1) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index] == "Marcos") {
            array.splice(index, 1, "nuevo") //No me está funcionando con el splice and someone TELL ME WHYYYYYYYYYYYYYYYYYY
        }
    }
    return array;
};

let nuevosConcursantes = (array, nuevo1, nuevo2, detrasDe) => {
    let nuevoArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] == detrasDe) {
            nuevoArray.push(detrasDe);
            nuevoArray.push(nuevo1);
            nuevoArray.push(nuevo2);
        }
        else {
            nuevoArray.push(array[index])
        }

    }
    return nuevoArray;
};
// console.log(nuevosConcursantes(clasificaciones, "Julieta", "Martina", "Marcos"))

// d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia
// script:
let encabezaLista = (array, nombre) => {
    array.unshift(nombre);
    return array;
}
// console.log(encabezaLista(clasificaciones, "Alicia"))


// e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente
// script:

function general(array) {
    console.log(array);
    let array1=CambioAdelanto(array, "Leon", "Agustina");
    console.log(array1);
    let array2=descalificado(array1, "Eduardo");
    console.log(array2);
    let array3=nuevosConcursantes(array2, "Julieta", "Martina", "Marcos");
    console.log(array3);
    let array4=encabezaLista(array3, "Alicia");
    console.log(array4);
    return array4;
}

// const      princi clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz", "Eduardo"];
console.log(general(clasificaciones))