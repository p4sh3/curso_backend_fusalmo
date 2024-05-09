import setupReadline from './readline.js';

const contarCaracteres = () => {
    const rl = setupReadline();

    rl.question('Ingresa una cadena: ', (cadena) => {
        console.log(`La cadena ingresada tiene ${cadena.length} caracteres.`);
        rl.close();
    });
}

contarCaracteres();
