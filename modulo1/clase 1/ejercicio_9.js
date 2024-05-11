import setupReadline from './readline.js';

const contarVocales = (palabra) => {
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    const numVocales = [...palabra.toLowerCase()].reduce((contador, letra) => {
        return vocales.includes(letra) ? contador + 1 : contador;
    }, 0);

    return numVocales;
}

const cantidadVocales = () => {
    const rl = setupReadline();

    rl.question('Ingresa una palabra: ', (palabra) => {
        console.log(`El número de vocales en la palabra es: ${contarVocales(palabra)}`);
        rl.close();
    });
}

cantidadVocales();

