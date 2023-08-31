/* 
Filter permite generar en un nuevo array n base a la función y su condición, evalúa true o false, cuando el resultado a la condición sea true
ese dato pasará a formar el nuevo array filtrado
*/

const numeros = [10, 13, 31, 17, 107, 40]

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0
})

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 === 1
})

console.log(numerosImpares);
console.log(numerosPares);


