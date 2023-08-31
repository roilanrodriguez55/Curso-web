/* 
Crear una función que recibe un array con datos y me regrese uno de esos datos de forma aleatoria
*/

function randomNumber(array) {
    const random = Math.floor(Math.random() * array.length)
    return array[random]
}

console.log(randomNumber([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]))

