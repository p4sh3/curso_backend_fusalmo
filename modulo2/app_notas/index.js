import yargs from "yargs";

import {hideBin} from "yargs/helpers";
import { agregarNotas, eliminarNotas, listarNotas, leerNotas, editarNotas } from "./utils/notas.js";




yargs(hideBin(process.argv))
  .command({
    command: "agregar",
    describe: "Agregar nueva nota",
    builder: {
      title: {
        describe: "Título de la nota",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Cuerpo de la nota",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      agregarNotas(argv.title, argv.body);
    },
  })
  .command({
    command: "eliminar",
    describe: "Eliminar una nota",
    builder: {
      title: {
        describe: "Título de la nota",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      eliminarNotas(argv.title);
    },
  })
  .command({
    command: "ver",
    describe: "Lista de notas",
    handler() {
      listarNotas();
    },
  })
  .command({
    command: "leer",
    describe: "Leer una nota",
    builder: {
      title: {
        describe: "Título de la nota",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      leerNotas(argv.title);
    },
  })
  .command({
    command: "editar",
    describe: "Editar nueva nota",
    builder: {
      title: {
        describe: "Título de la nota a editar",
        demandOption: true,
        type: "string",
      },
      newtitle: {
        describe: "Nuevo valor del título",
        demandOption: true,
        type: "string",
      },
      newbody: {
        describe: "Nuevo valor del body",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      editarNotas(argv.title, argv.newtitle, argv.newbody);
    },
  })
  .parse();

