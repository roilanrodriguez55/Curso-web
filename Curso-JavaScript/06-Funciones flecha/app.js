/* Declaración de funcion tipo flecha, este tipo de función no se puede llamar antes de ser declarada,
las funciones se declaran con const en lugar de let para evitar que se le cambie su comportamiento */

const funcionFlecha = (parametro) => {
    /* Aqui dentro va el codigo a ejecutar */
    console.log(parametro);
}

let argumento="Esto es una función flecha"
funcionFlecha(argumento)

/* Declaración de una funcion con una unica linea */
const funcionDeLinea = (parametro) => console.log("Esto es una funcion declarada en una sola linea")

/* Declaración de una funcion, no es obligatorio usar los () cuando solo tiene un solo parametro */
const funcionUnParametro = parametro => console.log("Esto es una funcion con un solo parametro")

/* Declaración de una función, cuando el calculo es sencillo no es necesario poner el return, si son 
cálculos complejos se debe usar {} y dentro devolver el valor con return */
const funcionSinReturn = (param1,param2) => param1+param2

/* Declaración de una función, retornar un objeto */
const funcionReturnObject = () => ({nombre: "Roilan", apellido:"Rodriguez", ci:"02030262389"})