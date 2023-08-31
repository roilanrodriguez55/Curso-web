function repetir(funcion) {
    funcion()
    funcion()
}

function hola() {
    console.log("Hola a todos");
}

function chau() {
    console.log("Chau, hasta la próxima");
}

//Aqui se llama a la función y se le pasa como argumento
repetir(hola)


