/* 
map se podria traducir por cada elemento. Por cada elemento muéstrame o tráeme el elemento o su índice
*/

const numeros = [1, 2, 3, 4, 5]

const doble = numeros.map(function (valor) {
    return valor * 2
})

console.log(doble)

const raiz = doble.map(Math.sqrt)

console.log(raiz)

const nuevo = numeros.map(function (elemento, indice) {
    return "Indice: " + indice + " - Valor:" + elemento
})

console.log(nuevo)