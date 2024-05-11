/*
Define un objeto que represente un producto con propiedades como nombre, precio y cantidad. Luego, calcula el costo total multiplicando el precio por la cantidad para varios productos y sumando los resultados
*/

import { productos } from "./data.js";

let total = 0;

productos.forEach(producto => {
  total += producto.precio*producto.cantidad;
  console.log(`\nProducto: ${producto.nombre}\nTotal: ${producto.precio*producto.cantidad}`);
})

console.log(`\nSuma de los totales: ${total}`);