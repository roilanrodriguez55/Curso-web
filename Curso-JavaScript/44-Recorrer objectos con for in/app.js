/* 
SINTAXIS (Está pensado más que nada para los objetos)
for(let key in objeto){
    console.log(objeto[key])
}
*/

const ticket01 = {
    sal: 33,
    fosforos: 12,
    yerba: 45,
    azucar: 55,
    pan: 15
}

//De esta forma se obtienen las keys
for (let key in ticket01) {
    console.log(key)
}

//De esta forma se obtienen los valores de las keys
for (let key in ticket01) {
    console.log(ticket01[key])
}