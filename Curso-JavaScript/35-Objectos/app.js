// Los objetos en JS están definidos por:
// Key (llave) y Valor

//Definición de un Object
const cliente01 = {
    name: "Roilán",
    firstName: "Rodríguez",
    lastName: "Castillo",
    age: 21
}

// Valores posibles, como accederlos
/* Las Key de los objetos se pueden definir con numeros, pero luego para poderlas llamar hay que darle un tratamiento especial,
asi que es recomendable no utilizar esta nomenclatura */

//Agregar o actualizar propiedades de los objetos

//Actualizar valor de la propiedad
cliente01.age = 51//Se puede modificar a cualquier tipo de dato si se desea
console.log(cliente01.age)

//Agregar propiedad

cliente01.sobreNombre = "gato"//De esta forma se agrega una nueva propiedad, solamente declarandola con su nombre y asignándole un valor
console.log(cliente01.sobreNombre)

//Creando un objeto vacio
const opinion = {}

opinion.marcos = "No me gustó"
opinion.roilan = "Me encantó, sigan así"
opinion.yamila = "Esoooo"

console.log(opinion.roilan)