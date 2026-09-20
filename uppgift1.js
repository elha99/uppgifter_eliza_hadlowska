/* Lösning till Uppgift 1. Av Eliza Hadlowska, 2026*/
"use strict";


//Textsträng med förnamn, jag tänker const för att man brukar inte byta förnamn oftast
const firstName = "Eliza";

//Textsträng med efternamn, efternamnet kan bytas vid giftermål och annat så det fungerar bättre med let
let lastName = "Hadlowska";

//Ålder
let age = 27;

//En boolean som anger om personen är student
let isStudent = true;

console.log(firstName + " " + lastName);
console.log("Ålder: " + age);
console.log("Student: " + isStudent);