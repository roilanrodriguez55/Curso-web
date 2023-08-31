const cliente01 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 45,
    domicilio: "Paseo del rey 1400",
    localidad: "Capital Federal",
}


//Se pone Object.keys() y dentro de los parentesis se pone el objeto, esto sirve para ver cuales son las keys del objeto (atributos)
for (const element of Object.keys(cliente01)) {
    console.log(element)
}

//Se pone Object.values() y dentro de los parentesis se pone el objeto, esto sirve para ver cuales son los valores que tienen las keys
for (const element of Object.values(cliente01)) {
    console.log(element)
}

