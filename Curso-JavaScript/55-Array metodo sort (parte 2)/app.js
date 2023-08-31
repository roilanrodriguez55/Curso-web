/* 
SORT 
si Funcion (a,b) retorna menos que 0 - ordena a y luego b
si Funcion (a,b) retorna 0 - deja todo como está
si Funcion (a,b) retorna mas de 0 - ordena b y luego a
*/

const numeros = [100, 2, 8, 10, 11, 1200, 200]
numeros.sort()//Asi no se ordena correctamente
console.log(numeros);

//Ordenar números de forma Ascendente
const ordenAscendente = numeros.sort((a, b) => a - b)
console.log(ordenAscendente);

//Ordenar números de forma Descendente
const ordenDescendente = numeros.sort((a, b) => b - a)
console.log(ordenDescendente);
