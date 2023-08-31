/* 
Some es muy parecido al metodo every, pero every requiere que TODO sea true para regresar true, some por otro lado con que un solo valor cumpla la 
condición entonces regresa true
*/

const palabras = ["tomate", "año", "remo", "tentáculo", "perro", "liebre"]

//Alguna de estas palabras tiene más de 6 caracteres?
let resultado = palabras.some((valor) => {
    return valor.length > 6
})

console.log(resultado);

//Alguna de estas palabras comienza con b?
resultado = palabras.some((valor) => {
    return valor[0] === "b"
})

console.log(resultado);

//Alguna de estas palabras contiene mate

resultado = palabras.some((valor) => {
    return valor.includes("mate")
})

console.log(resultado);

