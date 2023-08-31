/* Las funciones callback son funciones que reciben otras funciones */

function comprar(art1, art2, funcion) {
  return funcion(art1 + art2);
}

function imprimir(param) {
  console.log("Compramos leche y pan - gastamos: " + param);
}

comprar(65, 70, imprimir);
