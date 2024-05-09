import { createInterface } from 'readline';

const setupReadline = () => {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return rl;
};

export default setupReadline;
