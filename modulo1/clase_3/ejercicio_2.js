import { validarEntradaNumerica } from "../utils.js";
import { mainPrompt } from "./index.js";

const evaluarNumeros = (numero1, numero2, numero3) => {
  if (numero1 === numero2 && numero3 === numero2){
    return ;
  }else if (numero1 > numero2 && numero1 > numero3) {
    return numero1;
  }else if (numero2 > numero1 && numero2 > numero3){
    return numero2;
  }else {
    return numero3;
  }
  
}

export const promptEjercicio2 = rl => {
  
  const numeros = []


  rl.question("Ingresa el primer número: ", (numero) => {
    numeros.push(validarEntradaNumerica(numero));
    rl.question("Ingresa el segundo número: ", (numero) => {
      numeros.push(validarEntradaNumerica(numero));
      rl.question("Ingresa el tercer número: ", (numero) => {
        numeros.push(validarEntradaNumerica(numero));
        const mayor = evaluarNumeros(...numeros);

        (mayor) ? console.log(`El número mayor es ${mayor}`) : console.log("Los 3 números son iguales");
        
        
        mainPrompt();
      }); 
    }); 
  }); 
  
}
