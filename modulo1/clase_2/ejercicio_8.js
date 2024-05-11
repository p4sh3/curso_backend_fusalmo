/*
 Crea una función que valide si un objeto tiene todas las propiedades requeridas, como nombre, dirección y teléfono.
*/

import { personas } from "./data.js";


const objetosValidos = personas.filter(persona => {

  const propiedadesRequeridas = ["nombre", "direccion", "telefono"];
  
  if (propiedadesRequeridas.every(propiedad => Object.keys(persona).includes(propiedad))){
    return true;
  } else {
    console.log(`El objeto con ID ${persona.id} no tiene las propiedades requeridas`);
    return false;
  }
})



console.log(`\nObjetos válidos:\n`);
console.log(objetosValidos);