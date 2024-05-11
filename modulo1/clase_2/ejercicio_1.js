/*
Crea una función que reciba un arreglo de cadenas de texto y cuente cuántas veces aparece cada palabra en todas las cadenas.
*/

const contadorPalabras = (cadenas) => {

  const contador = {};

  cadenas.forEach(cadena => {
    
    
    const palabras = cadena.split(" ");

    palabras.forEach(palabra => {
      contador[palabra] = (contador[palabra] || 0) + 1;
    })
    
  });

  return contador;
}


console.log(contadorPalabras(["Hola buenos días", "Hola buenas noches", "Hola buenas tardes"]));