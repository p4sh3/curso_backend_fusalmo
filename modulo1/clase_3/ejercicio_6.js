import { validarEntradaNumerica } from "../utils.js";
import { mainPrompt } from "./index.js";

const mesesDelAño = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];



const findMes = numero => {
  return mesesDelAño[numero];
}

export const promptEjercicio6 = rl => {
  rl.question("Ingresa el número de més: ", numero => {
    numero = validarEntradaNumerica(numero);
    if (numero > 12 || numero < 1) {
      console.log("SOlo hay 12 meses en el año, ingrese un número entre 1 y 12");
    }else {
      console.log(`El mes número ${numero} es ${findMes(numero-1)}`);
    }

    mainPrompt();
  })
}
