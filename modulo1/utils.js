import { createInterface } from 'readline';

export const setupReadline = () => {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return rl;
};


export const validarEntradaNumerica = numero => {
  try{
    return Number(numero);
  } catch {
    console.log("Ingrese valores numéricos");
  }
}