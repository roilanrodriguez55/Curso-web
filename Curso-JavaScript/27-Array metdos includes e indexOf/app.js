/*
Se utilizan para BUSCAR dentro de un array

includes - retorna un boolean dependiendo si encuentra el valor o no (no funcion en IExplorer)
indexOf - retorna la posicion del indice si lo encuentra, si no existe retorna -1

Ambos métodos son Case Sensitive (Sencible a las mayusculas o minúsculas)
*/

const nombres = [
    "marcos",
    "jorge",
    "luis",
    "rodrigo",
    "gaston",
    "felipe",
]

console.log(nombres.includes("marcos"))

console.log(nombres.indexOf("luis"))

//Otra forma de ponerlo es preguntando directamente en la posicion
console.log(nombres.includes("marcos",2))//Esto pregunta si exite un "marcos" en la posición 2

//De igual forma se puede hacer con el indexOf
console.log(nombres.indexOf("luis",3))//Retorna -1 xq no encuentra a ningún "luis" en la posición 3