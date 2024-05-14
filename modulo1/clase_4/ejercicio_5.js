const operacionAsincrona = callback => {
  setTimeout(() => {
    callback("Operación asíncrona completada");
  }, 2000)
}

operacionAsincrona(mensaje => {
  console.log(mensaje);
})