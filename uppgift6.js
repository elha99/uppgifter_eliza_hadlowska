/* Lösning till Uppgift 6. Av Eliza Hadlowska, 2026*/
"use strict";

//Funktion som räknar ut arean av en rektangel
function calculateArea(width, height) {
    //Arean = bredden * höjden
    let sum = width * height;
    //sum = arean
    return sum;
}

//Olika värden för att testa att det fungerar, skriver ut värdena med texten "Arean är"
console.log("Arean är " + calculateArea(4, 10));
console.log("Arean är " + calculateArea(18, 24));
console.log("Arean är " + calculateArea(25, 35));