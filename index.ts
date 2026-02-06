import readline from 'readline';
import fs from 'node:fs'
import { beolvasas } from './beolvasas.ts'
import chalk from 'chalk';

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
    const magassagok = [];
    for (let i = 0; i < length; i++) {
        const magassag = Math.floor(Math.random() * 50) + 150;
        magassagok.push(magassag);
    };
    magassagok.sort((a, b) => a - b);
    console.log(magassagok);
    writeArray2Txt(magassagok);
};

const writeArray2Txt = function (arr: number[]) {
    let arrText = '';
    arr.forEach(element => {
        arrText += `${element}\n`;
    });
    fs.writeFileSync('magassagok.txt', arrText);
};

const printOutCSV = async function () {
    const arr = await beolvasas('./petrik-termek.csv');
    arr.forEach((element: any) => {
        console.log(element.toString());
    });
};

// readInput();
printOutCSV()