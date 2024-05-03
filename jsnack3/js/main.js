'use strict';

let userNumbers = [];
let somma = 0;

for (let i = 0; i < 10; i++){
    let userNumber = parseInt(prompt(`Inserisci numero ${i + 1}`));
    console.log('Il numero inserito è: ', userNumber);
    userNumbers.push(userNumber);
    somma += userNumbers[i];
}

console.log('La somma è: ', somma);