import { addNote, deleteNotes, showNote, editNote } from "./utils/notas.js";


import select from '@inquirer/select';


const mainPrompt = async () => {
  while(true) {
    
    const answer = await select({
      message: 'Que desea hacer?',
      choices: [
        {
          name: 'Agregar Nota',
          value: 'add',
          description: 'Añade una nueva nota a tu lista de notas',
        },
        {
          name: 'Ver Nota',
          value: 'show',
          description: 'Mira todas las notas que has añadido a tu lista',
        },
        {
          name: 'Eliminar Nota',
          value: 'delete',
          description: 'Elimina una nota de tu lista de notas',
        },
        {
          name: 'Editar Nota',
          value: 'edit',
          description: 'Edita una nota de tu lista de notas',
        },
        {
          name: 'Salir',
          value: 'leave',
          description: '',
        },
      ],
    });

    switch(answer){

      case "add":
        console.clear();
        await addNote();
        break;

      case "show":
        console.clear();
        await showNote();
        break;

      case "edit":
        console.clear();
        await editNote();
        break;   

      case "delete":
        console.clear();
        await deleteNotes();
        break;  

      case "leave":
        return;
    }
  }
}


mainPrompt();