import setupReadline from './readline.js';

const reemplazarPalabra = () => {
    const rl = setupReadline();

    rl.question('Ingresa una frase: ', (frase) => {
        rl.question('Ingresa la palabra que deseas reemplazar: ', (palabraOriginal) => {
            rl.question('Ingresa la palabra con la que deseas reemplazarla: ', (palabraNueva) => {
                console.log(`La nueva frase es: ${frase.replace(palabraOriginal, palabraNueva)}`);
                rl.close();
            });
        });
    });
}

reemplazarPalabra();
