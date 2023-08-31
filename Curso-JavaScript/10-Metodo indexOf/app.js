//Metodo indexOf: retorna el primer indice de la cadena o substring que le estamos pasando

let saludo="Hola-mundo"

console.log((saludo+" compliquemos el saludo").indexOf("el"))//retorna -1 si no encuentra la cadena

console.log(saludo.indexOf("o",2))/*Este tiene 2 parametros, el primero es un string y el segundo 
es a partir de que indice se quiere comenzar a buscar*/