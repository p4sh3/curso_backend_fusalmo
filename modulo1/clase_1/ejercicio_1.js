import rl from './readline.js';

const saludarConNombreCompleto = () => {
    rl.question('Ingresa tu nombre: ', (nombre) => {
        rl.question('Ingresa tu apellido: ', (apellido) => {
            console.log(`¡Hola, ${nombre} ${apellido}! 👋`);
            rl.close();
        });
    });
}

saludarConNombreCompleto();