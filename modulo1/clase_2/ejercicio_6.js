/*
Crea una función que reciba un arreglo de objetos con propiedades como nombre, edad y género, y busque un objeto específico por nombre.
*/

import { personas } from "./data.js";

const filtrarPersonas = (personas, nombre) => {
  return personas.filter(persona => persona.nombre === nombre);
}


console.log(...filtrarPersonas(personas, "Juan Guzman"));