import setupReadline from './readline.js';

const capitalizarFrase = (frase) => {

    frase.split(' ').map(palabra => {
        console.log(frase)
      frase = frase.replace(palabra[0], palabra[0].toUpperCase());
    });

    return frase;
}

const capitalizarFraseEntradaUsuario = () => {
    const rl = setupReadline();

    rl.question('Ingresa una frase: ', (frase) => {
        console.log(`La frase capitalizada es: ${capitalizarFrase(frase)}`);
        rl.close();
    });
}

capitalizarFraseEntradaUsuario();
