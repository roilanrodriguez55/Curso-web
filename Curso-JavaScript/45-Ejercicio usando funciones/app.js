/* 
Crear una función isValidPassword que acepte 2 argumentos, user and pass

Reglas a cumplir:
1) pass debe contener al menos 8 caracteres
2) pass no debe contener espacios
3) pass no debe contener el usuario como parte del mismo en ningún sitio

Retornar solo true o false
*/

/* function isValidPassword(user, pass) {
    if (pass.length < 8) {
        return false
    }

    if (pass.includes(" ")) {
        return false
    }


    if (pass.includes(user)) {
        return false
    }

    return true
} */



function isValidPassword(user, pass) {
    const espacios = pass.includes(" ")
    const userName = pass.includes(user)
    const pocosCaracteres = pass.length < 8
    return !espacios && !userName && !pocosCaracteres
}

console.log(isValidPassword("frost", "12345678"))