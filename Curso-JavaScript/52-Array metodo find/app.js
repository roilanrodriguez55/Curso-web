/* 
Find retorna el valor del primer elemento del array que satisface el pedido de la función, osea, 
funciona regresando el primer valor que sea true y se detiene
*/

const animales = ["gato","perro","zorro","puma","tapir"]

console.log(animales.find((animal) => {
    return animal.includes("zorro")
}))


