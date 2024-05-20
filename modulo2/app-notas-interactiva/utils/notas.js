import fs from "node:fs"
import chalk from "chalk"
import { input } from '@inquirer/prompts';
import checkbox from '@inquirer/checkbox';
import select from '@inquirer/select';


let notas = []

const getNotes = () => {
  try {
    if (!fs.existsSync("notas.json")) {
      fs.writeFileSync("notas.json", JSON.stringify([]));
    }

    const dataBuffer = fs.readFileSync("notas.json");
    const dataJSON = dataBuffer.toString();
    notas = JSON.parse(dataJSON);
  } catch (e) {
    console.log("error", e);
  }
}

const notesSelect = (message, showDescription) => {

  const choices = notas.map(({ title, body }, index) => {
    return { name: title, value: index, description: showDescription ? `Cuerpo: ${body}`: "" }
  })

  return select({
    message,
    choices
  });
}

const notesCheck = (message) => {
  return checkbox({
    message: message,
    choices: notas.map(({ title, body }, index) => {
      return { name: title, value: index }
    })
  });
}

const validateExistingNotes = () => {

  if (!notas.length) {
    console.log(chalk.red("No tienes niguna nota agregada\n"))
    return false;
  }

  return true;
}

const saveNotes = (notas) => {
  const dataJSON = JSON.stringify(notas)
  fs.writeFileSync("notas.json", dataJSON);

}


export const addNote = async () => {

  const title = await input({ message: 'Título de la nota: ' });
  const body = await input({ message: 'Cuerpo de la nota: ' });

  notas.find((note) => note.title === title);

  // Verificar que no se vaya a duplicar una nota ya existente
  if (!notas.find((note) => note.title === title)) {
    notas.push({
      title,
      body
    })
    saveNotes(notas)
    console.log(chalk.green.inverse("Nota agregada\n"));

  } else {

    console.log(chalk.red.inverse("Nota no agregada\n"));
  }
}


export const deleteNotes = async () => {

  if (!validateExistingNotes()) return

  let deletedNotes = 0;
  const indexes = await notesCheck("Seleccione la nota que desea eliminar");

  if(!indexes){
    console.log(chalk.red.inverse("No se seleccionó ninguna nota\n"));
    return ;
  }

  for(let index of indexes){
    notas.splice((index - deletedNotes), 1)
    deletedNotes += 1;
    
  }
  console.log(chalk.green.inverse("Notas eliminadas\n"));
  saveNotes(notas);

}

export const editNote = async () => {


  if (!validateExistingNotes()) return

  const index = await notesSelect("Seleccione la nota que desea editar", true)

  const title = await input({ message: 'Nuevo título: ' });
  const body = await input({ message: 'Nuevo cuerpo: ' });

  const newNota = {
    title,
    body
  }

  const duplicateNote = notas.find((note) => note.title === newNota.title);

  if (duplicateNote) {
    console.log(chalk.red.inverse("No se pude editar la nota con los nuevos valores porque ya existe otra nota con esos valores"));
    return;
  }

  notas[index] = newNota;
  saveNotes(notas);
  console.log(chalk.green.inverse("\nNota editada\n"));

};

export const showNote = async () => {

  if (!validateExistingNotes()) return

  const index = await notesSelect("Seleccione la nota que desea ver", false)

  console.log(chalk.dim("\n________________________________________\n"))
  console.log(chalk.green("Título:"), chalk.white(notas[index].title))
  console.log(chalk.green("\nCuerpo: "), chalk.white(notas[index].body))
  console.log(chalk.dim("\n________________________________________\n"))


}


getNotes();