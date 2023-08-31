/* 
splice - se suele utilizar para trabajar con datos que esta en medio de un array, podemos:
quitarlos o removerlos, reemplazarlos o incluso agregar nuevos

splice(index, borrar, agregar)
*/

const animales = [
  "Puma",
  "Tigre",
  "Pantera",
  "Leon",
  "Leopardo",
  "cobra",
  "boa",
  "mamba",
];

animales.splice(
  5,
  0,
  "Piton"
); /* Aqui se le pasan 3 valores, el 1ro es el indice donde queremos comenzar a modificar, el 2do es cuantos elementos 
se desean borrar a partir del indice del primer elemento (si se pone 0 quiere decir que no se debe eliminar nada), y el 3er parametro es lo que
se desea agregar (despues del 3er valor se pueden seguir añadiendo por comas los demas valores) */
console.log(animales);

//Buscar Pantera y de encontrarlo reemplazarlo con Panther

let exists = animales.includes("Pantera"); //se verifica si existe "Pantera"
if (exists) {
  //si existe
  let index = animales.indexOf("Pantera"); //se guarda el indice en una variable
  animales.splice(index, 1, "Panther"); //se le pasa el indice al metodo splice, se elimina 1, y se agrega un nuevo elemento, los elementos que elimina se retornan, asi que se pueden guardar en una variable
} else {
  //si no existe
  console.log("No se encontró el animal"); //se muestra un mensaje en consola
}

console.log(animales);

const deleted = animales.splice(-4, 4); //aqui solo le paso 2 valores, esto es en caso de que solo quiera eliminar y no agregar nada, el 1ro es el indice de igual forma, y el segundo es la cantidad de elementos que se desean eliminar a partir de ese índice

console.log(deleted); //aqui se puestra como la variable deleted guardó el valor que se eliminó (si te fijas esto no retorno un valor, sino un array con todos los elementos que elimina)
console.log(animales);