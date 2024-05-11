class Bebe {
  constructor(nombre, meses) {
    this._nombre = nombre;
    this._meses = meses;
  }

  llorar() {
    return `${this._nombre} de ${this._meses} está llorando.`;
  }

  dormir() {
    return `${this._nombre} de ${this._meses} está durmiendo.`;
  }

  comer() {
    return `${this._nombre} de ${this._meses} está comiendo.`;
  }
}

const antonio = new Bebe("Antonio", 3);
const sonia = new Bebe("Sonia", 5);
const javier = new Bebe("Javier", 8);

for (const bebe of [antonio, sonia, javier]){
  console.log("\n_______________________\n");
  console.log(bebe.llorar());
  console.log(bebe.dormir());
  console.log(bebe.comer());
  console.log("_______________________\n");
}
