import { mainPrompt } from "./index.js";

const determinarTipoDeVehiculo = categoria => {
  switch (categoria.toLowerCase()) {
    case "moto":
      return "Motocicleta";
    case "auto":
      return "Autmovil";
    case "camion":
      return "Super camion";
    case "bicicleta":
      return "Super bicicleta";
    default:
      return "La categoria no existe";
  }
}

// Ejemplo de uso
export const promptEjercicio7 = rl => {
  rl.question("Ingresa la categoría: ", categoria => {
   console.log(determinarTipoDeVehiculo(categoria));
   mainPrompt();
  })
}