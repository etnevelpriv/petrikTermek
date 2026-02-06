import fs from "node:fs";
import { Tanterem } from "./Tanterem.ts";
export const beolvasas = async function (fajlnev: string) {
    try {
        const resp = fs.readFileSync(fajlnev);
        const data = resp.toString().split('\n').splice(1);
        const arr = [];
        for (let i = 0; i < data.length - 1; i++) {
            const element:string = data[i];
            const epulet = element.split(';')[0];
            const sorszam = element.split(';')[1];
            const osztaly = element.split(';')[2];
            console.log(epulet, sorszam, osztaly);
            arr.push(new Tanterem(epulet, Number(sorszam), osztaly));
        };
        console.log(arr);

    } catch (err: any) {
        throw new Error(err);
    };
};