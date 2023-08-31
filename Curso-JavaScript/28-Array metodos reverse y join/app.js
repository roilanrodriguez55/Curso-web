/* 
reverse - invierte el contenido del array original cada vez que lo aplico
join - me regresa el contenido del array como un string separado como me interese a mi
*/

const numerosOrdenados = [1,2,3,4,5]

console.log(numerosOrdenados.reverse());/*aqui no importa que se invoque al metodo reverse dentro del console.log(), tambien va a cumplir su funcion
y revertir el original*/
console.log(numerosOrdenados);

console.log(numerosOrdenados.reverse());
console.log(numerosOrdenados);

console.log(numerosOrdenados.join());//asi me retorna por defecto un string
console.log(numerosOrdenados.join(""));//aqui me retorna un string sin comas
console.log(numerosOrdenados.join(" "));//aqui se retorna un string con un espacio entre sus caracteres
console.log(numerosOrdenados.join("/"));//aqui se retorna un string con los caracteres separados por un slash
console.log(numerosOrdenados.join(" xxx "));//aqui se retorna con una cadena personalizada entre sus caracteres
console.log(numerosOrdenados);