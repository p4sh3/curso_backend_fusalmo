/*
Toma un arreglo de números y utiliza una iteración para sumar únicamente los números pares.
*/


const numeros = [1,2,3,4,5,6];

const sumaPares = (acc,cur) => {
  return (!(cur % 2)) ? acc + cur : acc;
}

console.log(`La suma de los números pares es: ${numeros.reduce(sumaPares, 0)}`);

