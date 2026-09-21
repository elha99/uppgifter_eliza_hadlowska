/* Lösning till Uppgift 3. Av Eliza Hadlowska, 2026*/
"use strict";

//Variabel med ålder
let age = 35

//Meddelande beroende på ålder
if (age < 18) {
    console.log("Barn")
} else if (age >= 18 && age < 65) {
    console.log("Vuxen")
} else {
    console.log("Pensionär")
}