/* 
sort - ordena alfabeticamente un array tomando sus valores como strings al hacerlo, 
por tanto, no funciona como uno espera cuando involucra numeros, modifica el original
*/

const animales = [
    "puma",
    "tigre",
    "pantera",
    "leon",
    "leopardo",
    "cobra",
    "boa",
    "mamba",
  ];

  animales.sort()

  console.log(animales)

  const numeros = [100,2,8,10,11,1200,200]

  numeros.sort()
  console.log(numeros)//no usar sort() para ordenar numeros

  