import setupReadline from './readline.js';


const isNumber = (number) => {
  if (!Number.isInteger(number)) {
    throw new TypeError('El valor del indice debe ser entero.');
  }
}
const extraerSubcadena = () => {
    const rl = setupReadline();

    rl.question('Ingresa una cadena: ', (cadena) => {
        rl.question('Ingresa el índice inicial de la subcadena: ', (indiceInicial) => {
            try {
                indiceInicial = parseInt(indiceInicial);
                isNumber(indiceInicial);

                rl.question('Ingresa el índice final (no inclusivo) de la subcadena: ', (indiceFinal) => {
                    try {
                        indiceFinal = parseInt(indiceFinal);
                        isNumber(indiceFinal);
                        
                        console.log(`La subcadena extraída es: ${cadena.slice(indiceInicial, indiceFinal)}`);
                        rl.close();
                    } catch (error) {
                        console.log(error.message);
                        rl.close();
                    }
                });
            } catch (error) {
                console.log(error.message);
                rl.close();
            }
        });
    });
}

extraerSubcadena();
