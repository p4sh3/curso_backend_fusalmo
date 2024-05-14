import { validarEntradaNumerica } from "../utils.js";
import { mainPrompt } from "./index.js";

const esParImpar = numero => {
  return !(numero % 2) ? `El número ${numero} es par` : `El número ${numero} es impar`;
}


export const promptEjercicio4 = rl => {

  rl.question("Ingrese un número: ", numero => {
    console.log(esParImpar(validarEntradaNumerica(numero)));
    
    mainPrompt();
  })
}