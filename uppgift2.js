/* Lösning till Uppgift 2. Av Eliza Hadlowska, 2026*/
"use strict";

//Priset för produkten
let price = 500;

//Antal produkter
let amount = 4;

//Totala summan exklusive moms
let summaUtanMoms = price * amount

//Totala summan inklusive 25% moms
let summaMedMoms = summaUtanMoms * 1.25

console.log("Pris: " + price + " kr");
console.log("Antal: " + amount);
console.log("Totalt: " + summaUtanMoms + " kr");
console.log("Totalt inklusive moms: " + summaMedMoms + " kr");