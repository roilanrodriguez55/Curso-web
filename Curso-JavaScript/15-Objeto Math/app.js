//Object Math

//Obtener el numero pi
console.log(Math.PI);

//Mostrar solo 4 decimales
console.log(Math.PI.toFixed(4)); //Esto redondea el ultimo decimal

//Quitar los decimales
console.log(Math.floor(Math.PI)); //No redondea los decimales

//Redondear un numero
console.log(Math.round(4.8));
console.log(
  Math.round(4.1564 * 100) / 100
); /*Para redondear a dos cifras despues de la coma
(se pone el multiplo de 10 que mas convenga para cada ejemplo)*/
console.log(Math.round(Math.PI));

//Pasar un numero negativo a su valor absoluto o positivo
console.log(Math.abs(-3.14));

//Calcular la potencia
console.log(Math.pow(2, 3)); //Primer valor la base, el Segundo el exponente

//Crear un numero aleatorio
console.log(Math.random()); //Sin pasar ningun valor genera un numero aleatorio entre 0 y 0.99

//Crear un numero aleatorio entre 0 y 10
console.log(Math.floor(Math.random() * 10 + 1))//Se le suma 1 para que tambien salga el 10
