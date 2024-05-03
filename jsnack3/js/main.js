'use strict';

// creo array per numeri(opzionale)
let userNumbers = [];
// inizializzo somma
let somma = 0;

for (let i = 0; i < 10; i++){
    // inserisco numero
    let userNumber = parseInt(prompt(`Inserisci numero ${i + 1}`));
    console.log('Il numero inserito è: ', userNumber);
    // pusho numero nell'array
    userNumbers.push(userNumber);
    // aggiungo alla somma
    somma += userNumbers[i];
}

console.log('La somma è: ', somma);