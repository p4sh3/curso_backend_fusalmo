class Fecha {

  constructor() {
    const fechaActual = new Date();
    this._hora = fechaActual.getHours();
    this._minutos = fechaActual.getMinutes();
    this._segundos = fechaActual.getSeconds();
  }

  mostrarHora() {
    console.log(`La hora actual es: ${this._hora}:${this._minutos}:${this._segundos}`)
  }



}

const fecha = new Fecha();
fecha.mostrarHora();
