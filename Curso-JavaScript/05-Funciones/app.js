/* 
Sintaxis - funtion

funtion nombreFuncion(parametro, parametro){
    Codigo a ejecutar 
    console.log(algo) //Esto no se toma como un valor de retorno
    return algo //Esto si se toma como un valor de retorno
}
*/
let a=1,b=5

/* Esta es una forma de declarar una función que puede ser declarada en cualquier parte del código (antes o después del llamado) */
function suma(num1, num2) {
    return a+b
}

console.log(suma(a,b));

/* Otra forma de declarar una función, el nombre de esta funcion es el de la variable, este tipo de funcion solo se puede llamar 
después de haberla declarado */

let miFuncion = function (){
    console.log(suma(a,b))
}

let funcion=miFuncion()