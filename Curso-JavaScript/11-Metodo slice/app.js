//Metodo slice: permite recortar un pedazo de un string
let saludo = "Hola mundo"

/*Este metodo tiene una sobrecarga de metodos, los cuales son:
-pasandole la posicion de inicio solamente, recorta desde la posicion hasta el final
-pasandole la posicion de inicio y la de fin recorta el segmento que le indico (en la posicion de fin esta no se cuenta
    por los que si queremos tomar esta posicion debemos colocar la posicion siguiente)
*/
console.log(saludo.slice(5));//con posicion de inicio solamente

console.log(saludo.slice(0,4));/*con posicion de inicio y fin*/

//El numero de fin puede ser negativo para recortar de atras hacia adelante

console.log(saludo.slice(0, -6));