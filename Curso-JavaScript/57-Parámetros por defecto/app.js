//Cuando se define la funcion, para prevenir que los argumentos no den error, se pueden poner valores por defecto con la siguiente sintaxis
function multi(x = 0, y = 1) {/* Si no se pasa ningún valor la x vale 0 y la y vale 1 por lo que el resultado es 0, si se pasa el valor de x
y toma el valor 1 por lo que se multiplica x por 1 y se retorna el mismo número, si se pasa la x y la y entonces la función funciona normalmente
*/
    return x * y
}

console.log(multi(2));


function saludar(nombre = null, apellido = null, tel = "99-99-99-99") {
    console.log(nombre + " " + apellido + " " + tel);
}

saludar("Roilan", "Rodriguez")