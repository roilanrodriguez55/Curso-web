let cadena1="28"
let cadena2="28.75"
let cadena3="28 dias tiene febrero"
let cadena4="28*3"
let cadena5="Marcos tiene 50"
let cadena6="$50"

//parseInt se usa para convertir a ENTERO
let resultado = parseInt(cadena1)//Si la cadena empieza con un numero el parseo va a funcionar tanto el entero como el flotante
console.log(resultado)
console.log(typeof resultado)

//parseFloat se usa para convertir a FLOAT o DECIMALES

let resultado2 = parseFloat(cadena1)//Cuando se prueba el caso de la cadena4, el parseo toma el primer valor si comienza con un numero, sino no
console.log(resultado2)
console.log(typeof resultado2)

//Otra forma para parsear sin necesidad de los parseInt o parseFloat

let resultado3=+(cadena2)//Con solo ponerle el signo de suma delante de la cadena, si es un numero entero lo convierte a entero, si es decimal lo deja decimal
console.log(resultado3)