/**
Modifica la función de multiplicación para que acepte un callback como tercer argumento y llame al callback
con el resultado. 
*/




const multiplicar = (a, b, callback) => {
  const producto = a*b;
  callback(producto);
}


multiplicar(2,4, resultado => {
  console.log(`Resultado: ${resultado}`);
})
