const tarea1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tarea 1 completada");
    }, 3000);
  });
};

const tarea2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tarea 2 completada");
    }, 3000);
  });
};

const tarea3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tarea 3 completada");
    }, 3000);
  });
};

Promise.all([tarea1(), tarea2(), tarea3()])
  .then((responses) => {
    console.log("Las tareas han finalizado");
    responses.forEach((response) => {
      console.log(response);
    })
    console.log("Accion final")
  })
  .catch((err) => {
    console.log(err);
  });
