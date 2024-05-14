const saludar = (nombre, callback) => {
  callback(`Hola ${nombre}`);
}


const mostrar = saludo => {
  console.log(saludo);
}


saludar("William", mostrar);