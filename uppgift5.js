/* Lösning till Uppgift 5. Av Eliza Hadlowska, 2026*/
"use strict";

//Array med maträtter
let matMeny = ["Pizza", "Kebab", "Korvgryta", "Pasta Carbonara", "Tacos"];

//Skriva ut hela arrayen
console.log(matMeny);
//Skriva ut första elementet
console.log(matMeny[0]);
//Skriva ut sista elementet
console.log(matMeny[4]);

//Lägga till Tomatsoppa sist i arrayen
matMeny.push("Tomatsoppa");
//Ta bort den första maträtten i arrayen
matMeny.shift();
//Skriva ut hela arrayen
console.log(matMeny)