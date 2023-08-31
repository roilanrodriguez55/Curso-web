/* 
SPREAD
En un Array - Crea un nuevo array usando existentes
*/

const nombres = ["Jose", "Cristian", "Luis", "Pedro"]
const apellidos = ["Perez", "Solis", "Castell", "Zarate"]
const apodos = ["chui", "oso", "tito", "tano"]

//Se ponen tres puntos delante de los arrays que se desea concatenar en el orden en que se desea (pueden ser tantos arrays se quieran) tambien funciona con String
const nombreApellidos = [...nombres, "Markinson", ...apellidos, ...apodos]/*En este ejemplo se le agregó un nuevo valor a los apellidos (no se modifica el
 array de apellidos original)*/
console.log(nombreApellidos);
