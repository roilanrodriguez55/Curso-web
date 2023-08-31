/*
Metodos para AGREGAR o QUITAR elementos de un Array

push - agrega al final
pop - elimina desde el final
unshift - agrega al principio del array
shift - elimina desde el principio

*/

let frutas = ["Pera", "Banana"];
console.log(frutas);

frutas.push("Mango", "Melon", "Manzada");//el metodo push() retorna la nueva longitud del array
/*se pueden agregar mas de 1 en 1, sino que se pueden pasar tantos elementos se quiran*/

console.log(frutas); //aqui se agregó el nuevo valor al final (igual que las colas)

frutas.pop(); //el metodo pop() retorna el elemento que eliminó
console.log(frutas); //aqui se quitó el último elemento del array (igual que las colas)

frutas.unshift("Mi fruta"); //el metodo unshift() retorna la nueva longitud del array
console.log(frutas); //aqui se agregó un elemento al principio del array

frutas.shift(); //el metodo shift() retorna el elemento que elimina
console.log(frutas); //aqui se eliminó el primer elemento del array

let miArray = new Array(); //así se puede declarar un array vacío para luego agregarle elementos

miArray.push(5, 6, 7, 8, 9, 1, 2, 3);

console.log(miArray);
