//Hacer una función que reciba un array de enteros y retorne el promedio de esos números


function promedio(array) {
    let suma = 0
    array.forEach(element => {
        suma+=element
    })

    return suma / array.length
}

console.log(promedio([10, 50, 60]));