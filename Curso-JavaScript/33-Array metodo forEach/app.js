/* 
forEach se podría traducir por cada elemento. Por cada elemento muéstrame o tráeme el elemento o su índice
*/

const animales = ["Puma", "Tigre", "Pantera", "Leon", "Leopardo", "cobra", "boa", "mamba"]

animales.forEach(value => console.log(value))


function returnValues(value, index) {
    console.log(index + " = " + value)
}



