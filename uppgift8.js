/* Lösning till Uppgift 8. Av Eliza Hadlowska, 2026*/
"use strict";

//Objekt som består av en bok, inuti objektet är det titel, författare och utgivningsår
const book1 = {
    title: "Hunger Games",
    writer: "Suzanne Collins",
    publicationYear: 2011
};

//Funktion om bokinformation där den tar emot objektet ovanför som parameter
function bookInformation(book1) {
    //Funktionen skriver ut information om boken på tydligt sätt 
    console.log("Titel: " + book1.title)
    console.log("Författare: " + book1.writer)
    console.log("Utgivningsår: " + book1.publicationYear)
}

//Anropa funktionen
bookInformation(book1)