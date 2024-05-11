/*
Dado un objeto que representa una lista de compras con elementos y cantidades, genera una lista legible para el usuario mostrando cada elemento y su cantidad. 
*/

import { listaDeCompras } from "./data.js";


for (let elemento in listaDeCompras){
  console.log(`${elemento}    Cantidad: ${listaDeCompras[elemento]}`);
}

