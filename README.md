Instructions
1.
Kérj be a felhasználótól egy egész számot.
Ennyi tesztadatot kell generálni:
embereknek a magasságait centiméterben (150-200 közötti egész érték)
A magasságokat egy "magassagok" tömbben tárold el.

Rendezd a tömböt, és írd ki a tartalmát a:
konzolra
Egy "magassagok.txt" fájlba. Minden sor egy magasság legyen!


2.
Készíts egy "Tanterem" osztályt egy külön, "Tanterem.js" fájlban, az alábbi adattagokkal:
Épület (A vagy B)
Sorszám (szám)
Osztály (szöveg) - melyik osztálynak a saját terme?
Készíts hozzá konstruktort és toString függvényt is!

Készíts egy "beolvas(fajlnev)" függvényt (beolvas.js), amely a fajlnev fájl tartalmát beolvassa, és visszaadja egy listaként - az elemek a Tanterem osztály példányai legyenek.

Olvasd be a mellékelt petrik-termek.csv fájlt az index.js fájlban, és írd ki a konzolra!

2.a
Telepítsd a "chalk" modult.
A beolvasás előtt ellenőrizd, hogy a csv fájl létezik-e! Ha nem, piros színnel írj ki egy hibaüzenetet!