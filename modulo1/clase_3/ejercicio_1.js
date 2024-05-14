/*
Determinar si un número ingresado por el usuario es positivo, negativo o si es
cero. 
*/

import { validarEntradaNumerica } from "../utils.js";
import { mainPrompt } from "./index.js";

const analizarNumero = numero => {
  if (numero === 0) {
    console.log(`El número es 0`);
  } else if (numero < 0){
    console.log(`El número es negativo`);
  } else {
    console.log(`El número es positivo`);
  }
}

export const promptEjercicio1 = (rl) => {

    rl.question('Ingresa un número: ', (numero) => {
      analizarNumero(validarEntradaNumerica(numero));
      
      mainPrompt();
    });
}