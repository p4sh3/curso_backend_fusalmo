/* 
Toma dos arreglos de objetos que representen listas de estudiantes y profesores, y crea una nueva lista combinada con todos los miembros de la comunidad educativa
*/

import { estudiantes, profesores } from "./data.js";

const comunidadEducativa = [];

estudiantes.forEach(estudiante => comunidadEducativa.push(estudiante));

profesores.forEach(profesor => comunidadEducativa.push(profesor));


console.log(comunidadEducativa);