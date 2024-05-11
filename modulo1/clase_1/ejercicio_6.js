import setupReadline from './readline.js';

const contarPalabras = () => {
    const rl = setupReadline();

    rl.question('Ingresa una frase: ', (frase) => {

        console.log(`El número de palabras en la frase es: ${frase.trim().split(" ").length}`);
        rl.close();
    });
}

contarPalabras();
