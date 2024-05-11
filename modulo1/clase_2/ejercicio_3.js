/*
Toma un arreglo de objetos que representen personas con propiedades como nombre, edad y ciudad, y filtra las personas mayores de 30 años que viven en una ciudad específica.
*/

import { personas } from "./data.js";


const filtrarPersonas = (personas, ciudad) => {
  return personas.filter(persona => persona.ciudad === ciudad && persona.edad > 30);
}


console.log(filtrarPersonas(personas, "San Miguel"));
