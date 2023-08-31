/* 
REDUCE
Ejecuta una funcion por cada elemento del array para que resulte en un unico valor

[2,3,4,6,2].reduce((acumulador,valorActual) => (acumulador + valorActual))

Si reduce tiene 3 valores:
-el primero es el acumulador
-el segundo es el valor actual
-el tercero es el valor inicial del acumulador
*/

const numeros = [1, 2, 3, 4, 5, 6]

let resultado = numeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual
})

let mayorNumero = numeros.reduce((mayor, valorActual) => {
    /* if (valorActual > mayor) {
        return valorActual
    }
    return mayor */

    return Math.max(mayor, valorActual)
})

console.log("La suma de todos los numeros es: " + resultado);

console.log("El mayor de todos los números es: " + mayorNumero);


//Resultados de encuesta

const votos = ["yes", "yes", "no", "yes", "no", "no", "yes"]

const resultados = votos.reduce((total, porCadaVoto) => {
    if (total[porCadaVoto]) {
        total[porCadaVoto]++
    } else {
        total[porCadaVoto] = 1
    }

    return total
}, {})

console.log(resultados);
