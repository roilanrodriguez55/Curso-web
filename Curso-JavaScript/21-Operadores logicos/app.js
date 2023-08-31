/* 
&& AND (y)
--------------------------------------
true && true = true
false && true = false
true && false = false
false && false =false
--------------------------------------
|| OR (o)
--------------------------------------
true || true = true
false || true = true
true || false = true
false || false = false
--------------------------------------
. ! NOT (invertir o negar)

*/

//Orden de presedencia para los operadores logicos

let z = 8

let misterio = z == 8 || z === 3 && z > 10

/* Orden logico 
. ! NOT - && AND - || OR
*/