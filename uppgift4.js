/* Lösning till Uppgift 4. Av Eliza Hadlowska, 2026*/
"use strict";

//startvärde 1, talet ska vara mindre eller lika med 20, och öka med 1
for (let i = 1; i <= 20; i++) { 
//Om talet är delbart med 2 så blir det ingen rest över, === är att både värdet och datatypen är lika, alltså 0, då ska den skriva ut den siffran
    if (i % 2 === 0) {
        console.log(i);
    }
}
