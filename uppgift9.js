/* Lösning till Uppgift 9. Av Eliza Hadlowska, 2026*/
"use strict";

//Array med 3 olika personer som innehåller namn, ålder och vart personen bor
const people = [
    {
        name: "Emma",
        age: 32,
        city: "Östersund"
    },
    {
        name: "David",
        age: 46,
        city: "Göteborg"
    },
    {
        name: "Jolina",
        age: 15,
        city: "Strömsund"
    }
];

//Funktion som avgör om personen är myndig, men den skriver ut också vart personen bor
function personInfo(people){
    //Startvärde som kommer innehålla en sträng beroende på om påståendet nedanför är sant eller inte
    let ofAge = "";
    if (people.age >= 18) {
        ofAge = "är myndig";
    } else {
        ofAge = "är inte myndig";
    }
    //Skriver ut namn, stad och om personen är myndig eller ej
    console.log(`${people.name} bor i ${people.city} och ${ofAge}`)
}

/*Här går det att använda vanlig for-loop, men i det här fallet ska vi köra igenom varje person utan att skippa något
därför kan man få mindre kod och ändå samma resultat med en forEach-loop*/
people.forEach(personInfo);
