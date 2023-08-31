//Determina si todos los elementos en el array satisfacen una condición, retorn a un boolean

const edades = [1, 15, 17, 13, 8]; /* todos son menores a 18 */

const sonMenoresDeEdad = (edad) => edad <= 18; //esto es una función con el siguiente comportamiento: edad menor o igual a 18

let resultado = edades.every(sonMenoresDeEdad)

console.log(resultado)

//Son mayores a 18
console.log([20, 33, 21, 31].every((valor) => valor >= 18)) //true
console.log([20, 15, 21, 31].every((valor) => valor >= 18)) //false





