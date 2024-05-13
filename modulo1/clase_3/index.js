import { setupReadline } from "../utils.js";
import { promptEjercicio1 } from "./ejercicio_1.js";
import { promptEjercicio2 } from "./ejercicio_2.js";
import { promptEjercicio3 } from "./ejercicio_3.js";
import { promptEjercicio4 } from "./ejercicio_4.js";
import { promptEjercicio5 } from "./ejercicio_5.js";
import { promptEjercicio6 } from "./ejercicio_6.js";
import { promptEjercicio7 } from "./ejercicio_7.js";

const rl = setupReadline();



export const mainPrompt = () => {

  console.log("\n_____________________________")
  console.log("1-Ejercicio 1\n2-Ejercicio 2\n3-Ejercicio 3\n4-Ejercicio 4\n5-Ejercicio 5\n6-Ejercicio 6\n7-Ejercicio 7");
  console.log("_____________________________");
  rl.question('\nIngresa una opción: ', (opcion) => {

    switch (opcion){

      case "1":
        promptEjercicio1(rl);
        break;
      case "2":
        promptEjercicio2(rl);
        break;
      case "3":
        promptEjercicio3(rl);
        break;
      case "4":
        promptEjercicio4(rl);
        break;
      case "5":
        promptEjercicio5(rl);
        break
      case "6":
        promptEjercicio6(rl);
        break
      case "7":
        promptEjercicio7(rl);
        break
      default:
        console.log("Opción no válida");
    }
  });
}

mainPrompt();

