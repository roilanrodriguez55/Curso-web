/* 
Ejercicio: devolver la suma de estos de cada elemento del siguiente array y luego, la suma total de los valores
*/

const miArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
    [10, 22, 33, 44]
]


//Primera forma de hacerlo
const primeraForma = miArray.map(function (array) {
    let suma = 0

    //Con forEach
    array.forEach(element => {
        suma += element//Este es el array que tiene en la posición del forEach
    });


    /* //Con for normal
     for (let i = 0; i < array.length; i++) {
        suma += array[i]
    } */

    return suma
})

//Segunda forma de hacerlo
function suma(array) {
    let suma = 0

    //Con forEach
    array.forEach(element => {
        suma += element
    });

    /* //Con for normal
    for (let i = 0; i < array.length; i++) {
        suma+=array[i]
    } */
    return suma
}

const segundaForma = miArray.map(suma)


let sumaTotal = 0

//Se puede sustituir el array primeraForma por segundaForma y dará el mismo resultado
primeraForma.forEach(element => {
    sumaTotal+=element
});



console.log(primeraForma)

console.log(segundaForma)

console.log(sumaTotal)




