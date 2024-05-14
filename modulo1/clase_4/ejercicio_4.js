/**
Crea una función retrasarPromesa(ms) que devuelva una promesa que se resuelva después de un cierto tiempo
especificado en milisegundos. 
*/


const retrasarPromesa = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Han pasado ${ms/1000} segundos`);
    }, ms)
  })
}


retrasarPromesa(2000)
.then(response => {
  console.log(response);
})