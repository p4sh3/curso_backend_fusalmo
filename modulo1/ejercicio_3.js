import setupReadline from './readline.js';

const mostrarMayusculas = () => {
    const rl = setupReadline();

    rl.question('Ingresa una cadena: ', (cadena) => {
        console.log(`La cadena en mayúsculas es: ${cadena.toUpperCase()}`);
        rl.close();
    });
}

mostrarMayusculas();
