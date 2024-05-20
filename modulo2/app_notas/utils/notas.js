import fs from "node:fs"
import chalk from "chalk"

import { createInterface } from "readline";

const setupReadline = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return rl;
};

const cargarNotas = () => {
  try {
    const dataBuffer = fs.readFileSync("notas.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch {;
    return []
  }

}


export const guardarNotas = (notas) => {
  const dataJSON = JSON.stringify(notas)
  fs.writeFileSync("notas.json", dataJSON);

}


export const agregarNotas = (title, body) => {
  const notas = cargarNotas()
  const duplicateNote = notas.find((note) => note.title === title);

  if (!duplicateNote){
    notas.push({
      title,
      body
    })
    guardarNotas(notas)
    console.log(chalk.green.inverse("Nota agregada"))
  } else {
    
    console.log(chalk.red.inverse("Nota no agregada"));
  }
}


export const eliminarNotas = (title) => {
  const notas = cargarNotas();
  const notasToKeep = notas.filter((note) => note.title !== title);

  if(notas.length > notasToKeep.length){
    guardarNotas(notasToKeep);
    console.log(chalk.green.reverse("Nota eliminada"));
  } else {
    
    console.log(chalk.red.reverse("Nota no eliminada"));
  }
}

export const editarNotas = (title, newtitle, newbody) => {
  const notas = cargarNotas();
  const notaEditar = notas.find((nota) => nota.title === title);

  const newNota = {
    title: newtitle,
    body: newbody
  }
  const indexNotaEditar = notas.indexOf(notaEditar);
  
  const duplicateNote = notas.find((note) => note.title === newNota.title);

  if (!duplicateNote) {
    notas[indexNotaEditar] = newNota;
    guardarNotas(notas);
    console.log(chalk.green.inverse("Nota editada"));
  } else {
    console.log(chalk.red.inverse("No se pude editar la nota porque los nuevos valores ya existen"));
  }
};

export const listarNotas = () => {
  const notas = cargarNotas();
  console.log(chalk.inverse("Tus notas"));
  console.log(notas)
  // notas.forEach(nota => {
  //   console.log(nota.title)
  // });
}

export const leerNotas = (title) => {
  const notas = cargarNotas();
  const nota = notas.find((nota) => nota.title === title);

  if(nota){
    console.log(chalk.inverse(nota.title));
    console.log(chalk.blue(nota.body))
  }else {
    console.log(chalk.red.inverse("Nota no encontrada"))
  }
}