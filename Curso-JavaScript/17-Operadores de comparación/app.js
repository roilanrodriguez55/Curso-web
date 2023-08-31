/*
Operadores de comparación

> mayor que
< menor que

>= mayor o igual
<= menor o igual

== Igual que (solo compara valor)
!= No es igual que (solo compara valor)

=== Completamente igual que (compara valor y tipo de dato)
!== No es igual que o es diferente que (compara valor y tipo de dato)
*/

console.log (10 >= "10")//No importa que se comparen cadenas con numeros en el caso de los mayores que y menores que

console.log(10 == "10")//Aqui no importa el tipo de dato

console.log(10==="10")//Aqui si importa el tipo de dato

console.log(false=="")//Si se comparan con booleanos entonces true es 1 y false es 0 o vacio

console.log(true==1)//Aqui se compara true y 1 y se ve que es verdadero (para evitar esto es que se usa el triple igual ===)

console.log(null == undefined)//Si se compara null con undefined estos son iguales

console.log("abc".toUpperCase() === "ABC".toUpperCase);/*Para comparar cadenas se recomienda convertir ambas a mayuscula o minuscula ya que JS
es Case Sensitive (sencible a las mayusculas y minusculas)*/

