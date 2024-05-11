/*
Dado un arreglo de números, crea una nueva lista con los cuadrados de cada número utilizando el método map().
*/

const numeros = [1,2,3,4,5,6,7];

console.log(`Numeros: ${numeros}`);
console.log(`Numeros al cuadrado: ${numeros.map(numero => numero ** 2)}`);