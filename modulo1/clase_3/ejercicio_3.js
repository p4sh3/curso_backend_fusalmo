import { validarEntradaNumerica } from "../utils.js";
import { mainPrompt } from "./index.js";

const calcularFactorial = numero => {
  let resultado = 1;

  for(let i=1; i<= numero; i++) {
    resultado *= i;
  }

  return resultado;
}


export const promptEjercicio3 = rl => {
  rl.question("Digite el numero a reslizar el factorial: ", numero => {
  
    console.log(`El factorial es: ${calcularFactorial(validarEntradaNumerica(numero))}`);
    
    mainPrompt();
  })
}
