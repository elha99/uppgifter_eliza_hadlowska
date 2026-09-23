/* Lösning till Uppgift 7. Av Eliza Hadlowska, 2026*/
"use strict";

//Min array med sju tal 
let numberArray = [5, 8, 10, 2, 20, 18, 4]

//Funktion som heter sumArray som räknar ut summan av alla talen i arrayen ovanför
function sumArray(numberArray) {
    //Startpunkten är att summan är 0, och att det därefter ska kunna adderas siffror från arrayen
    let sum = 0;
    
    //For-loop: börja på index 0; eftersom värden kan tillkomma eller tas bort så skriver jag numberArray.length; ökar värdet med 1
    for (let i = 0; i < numberArray.length; i++) {
        
        //Alla talen i arrayen adderas och är lika med summan, för att använda mindre kod och göra det simpelt kan man skriva +=
        sum += numberArray[i];
    }
    //Returnera summan
    return sum;
}

//Skriva ut orden "Summan är" och summan av hela arrayen
console.log("Summan är " + sumArray(numberArray))