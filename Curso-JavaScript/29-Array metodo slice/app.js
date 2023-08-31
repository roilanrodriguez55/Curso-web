/* 
slice - crea un nuevo array tomando una posicion del array que usamos o pasamos,
debemos indicar el indice donde comenzar e indice donde terminar +1, si no se le
pasan parametros copia el array original en el nuevo
*/

const animales = [
  "puma",
  "tigre",
  "pantera",
  "leon",
  "leopardo",
  "cobra",
  "boa",
  "mamba",
];

const felinos = animales.slice(0, 5); //Si se le pasan 2 parametros, el 1ro es el indice de inicio y el 2do es el indice de finalización
console.log(felinos);

const viboras = animales.slice(5); //cuando se pone solo un elemento, este es el elemento de inicio y sigue hasta el final
console.log(viboras);

const serpientes = animales.slice(-3); //cuando se pone solo un elemento, este es el elemento de inicio y sigue hasta el final, en este caso con valores negativos
console.log(serpientes);
