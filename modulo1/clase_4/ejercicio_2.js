/*
Crea una función multiplicarPromise(a, b) que devuelva una promesa que resuelva el resultado de la
multiplicación de a y b. 

*/

const multiplicarPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    const producto = a*b;
    if (isNaN(producto)){
      reject("Error, no hay argumentos válidos");
    }else{
      resolve(producto);
    }
  })
}

multiplicarPromise(2,4)
.then(response => {
  console.log(`El resultado es ${response}`);
})
.catch(error => {
  console.log(error);
})