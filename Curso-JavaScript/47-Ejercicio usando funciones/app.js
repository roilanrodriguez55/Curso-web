/* 
Dada una cadena de texto cualquiera evaluar si dicha cadena contiene al menos 1 caracter de cada letra del alfabeto,
si es asi retornar true, sino retornar false
*/

function check(string) {
    const letras = "abcdefghijklmnñopqrstuvwxyz"
    for (const char of string) {
        if (letras.includes(char)) {
            return true
        }
    }
    return false
}

console.log(check("1234"));

