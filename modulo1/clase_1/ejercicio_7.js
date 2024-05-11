import setupReadline from './readline.js';

const invertirCadena = () => {
    const rl = setupReadline();

    rl.question('Ingresa una cadena: ', (cadena) => {
        
        console.log(`La cadena invertida es: ${cadena.split('').reverse().join('')}`);
        rl.close();
    });
}

invertirCadena();
