import fs from "node:fs";
import { Tanterem } from "./Tanterem.ts";
import chalk from "chalk";
export const beolvasas = async function (fajlnev: string): Promise<any> {
    const beolvasasPromise = new Promise((resolve, reject) => {
        try {
            const resp = fs.readFileSync(fajlnev);
            const data = resp.toString().split('\n').splice(1);
            const arr = [];
            for (let i = 0; i < data.length - 1; i++) {
                const element: string = data[i];
                const epulet = element.split(';')[0];
                const sorszam = element.split(';')[1];
                const osztaly = element.split(';')[2];
                arr.push(new Tanterem(epulet, Number(sorszam), osztaly));
            };console.log()
            resolve(arr);
        } catch (err: any) {
            reject(new Error(chalk.red(err)));
        };
    });
    return beolvasasPromise;
};