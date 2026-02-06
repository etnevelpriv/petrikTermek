import readline from 'readline';
import { getParsedCommandLineOfConfigFile } from 'typescript';

const readInput = function () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Milyenhosszú legyen a tesztadatsor? : ', (testDataLength: string) => {
        fillArray(Number(testDataLength));
        rl.close();
    });

    rl.on('close', () => {
        process.exit(0);
    });
};

const fillArray = function (length: number) {
    for (let i = 0; i < length; i++) {
        console.log(i)
    };
};

readInput();