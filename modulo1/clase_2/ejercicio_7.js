/*
Ordena un arreglo de objetos según una propiedad específica, como la edad o el precio.
*/

import { personas } from "./data.js";


console.log("Ordenando ascendentemente por edad:");

personas.sort((a,b) => a.edad - b.edad).forEach(persona => {
  console.log(`Nombre: ${persona.nombre}     Edad: ${persona.edad}`);
})