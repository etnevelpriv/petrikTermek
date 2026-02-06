export class Tanterem {
    epulet: string;
    sorszam: number;
    osztaly: string;
    constructor(epulet: string, sorszam: number, osztaly: string | undefined) {
        if (typeof epulet != "string" || epulet == "" || (epulet != 'A' && epulet != 'B') || epulet == undefined || epulet == null) {
            throw new Error('Az épület nincs megfelelően megadva. : ' + epulet);
        };
        if (typeof sorszam != "number" || sorszam == undefined || sorszam == null) {
            throw new Error('A sorszám nincs megfelelően megadva. : ' + sorszam);
        };
        if (typeof osztaly != "string" || osztaly == "" || osztaly == undefined || osztaly == null) {
            throw new Error('Az osztály nincs megfelelően megadva. : ' + osztaly);
        };
        this.epulet = epulet;
        this.sorszam = sorszam;
        this.osztaly = osztaly;
    };

    toString () {
        return (`Épület: ${this.epulet}, Sorszám: ${this.sorszam}, Osztály: ${this.osztaly}`)
    };
};