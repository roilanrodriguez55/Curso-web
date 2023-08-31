//Arrays
/* Los arrays en JS pueden contener cualquier tipo de dato */

//Definición literal de un array
let array = [1,2,true,null,"Hola",8.56]

//Definición con el objeto Array
let array2 = new Array(1,2,true,null,"Hola",8.56)

console.log(array)
console.log(array2)

console.log(array2[4])

let diasSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes"]
let array3 = new Array(1,2,true,null,"Hola",8.56)

//En JS los arrays pueden crear posiciones en blanco si se modifica un valor de una posicion que no exista
//diasSemana[10]="Domingo"
//console.log(diasSemana)
//Para agregar a la ultima posicion del arrays se puede usar el metodo lenght
diasSemana[diasSemana.length]="Domingo"
console.log(diasSemana)

//Obtener datos de Arrays
let array4 = ["gato","liebre","puma","loro"]

let miColeccion = [1,true,"Hola mundo", array4, "gato",3,undefined]
console.log(miColeccion[3][1])/*De esta forma se accede a un valor de un array que está contenido en otro (Como las matrices en Java)*/

//De esta forma tambien se pueden acceder a valores particulares de los string
console.log(miColeccion[2][0])//Asi se obtienen letras de un String almacenado de un Array, si se intenta con otro tipo de dato diferente se obtiene undefined