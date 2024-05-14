import { mainPrompt } from "./index.js";

const COLORES_PRIMARIOS  = ["rojo","amarillo","azul"];
const COMBINACIONES = {
  "verde": [COLORES_PRIMARIOS[2], COLORES_PRIMARIOS[1]],
  "morado": [COLORES_PRIMARIOS[2], COLORES_PRIMARIOS[0]],
  "naranja": [COLORES_PRIMARIOS[0], COLORES_PRIMARIOS[1]]
}


const analizarMezcla = (color1, color2) => {
  if (!COLORES_PRIMARIOS.includes(color1) || !COLORES_PRIMARIOS.includes(color2)){
    console.log("Error, los colores proporcionados no son parte de los colores primarios");
  }
  let mezcla_encontrada = false;
  Object.entries(COMBINACIONES).forEach(( combinacion ) => {

    if (combinacion[1].includes(color1) && combinacion[1].includes(color2)){
      mezcla_encontrada = true;
      console.log(`Al mezclar los colores ${color1} y ${color2} obtenemos ${combinacion[0]}`);
    }
  });
  
  if(!mezcla_encontrada){
    console.log("Error, los colores proporcionados no forman parte de alguna combinación disponible");
  }
}


export const promptEjercicio5 = rl => {
  console.log("____________________");
  console.log("Colores Primarios:");
  for(let color of COLORES_PRIMARIOS){
    console.log(color);
  }
  console.log("____________________");

  const coloresUsuario = [];

  rl.question("Ingresa el primer color primario que desea mezclar: ", color1 => {
    coloresUsuario.push(color1.toLowerCase());
    rl.question("Ingresa el segundo color primario que desea mezclar: ", color2 => {
      coloresUsuario.push(color2.toLowerCase());
      analizarMezcla(...coloresUsuario);
      mainPrompt();
    })
  })
}
