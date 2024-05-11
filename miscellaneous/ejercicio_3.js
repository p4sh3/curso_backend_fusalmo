class Persona {

    constructor(peso, altura){
      this._peso = peso;
      this._altura = altura;
    }

    calcularIMC() {
      return this._peso / (this._altura ** 2);
    }

    mostrarIMC() {
      console.log(`Su IMC es: ${this.calcularIMC()}`)
    }
}

const juan = new Persona(200, 1.75);
juan.mostrarIMC();
