import setupReadline from './readline.js';

const isPalindromo = (palabra) => {

    palabra = palabra.toLowerCase().replaceAll(' ', '');
    
    return palabra === palabra.split('').reverse().join('');
}

const verificarPalindromo = () => {
    const rl = setupReadline();

    rl.question('Ingresa una palabra: ', (palabra) => {
        if (isPalindromo(palabra)) {
            console.log(`"${palabra}" es un palíndromo.`);
        } else {
            console.log(`"${palabra}" no es un palíndromo.`);
        }
        rl.close();
    });
}

verificarPalindromo();
