'use strict';

let numberDigits = [];
let somma = 0;

for (let i = 1; i <= 4; i++){
    let numberDigit = prompt(`Inserisci la ${i}a cifra`);
    if (numberDigit.length === 1){
        numberDigit = parseInt(numberDigit);
        console.log('Hai inserito la seguente cifra:', numberDigit);
        if (!isNaN(numberDigit)){
            numberDigits.push(numberDigit);
            somma += numberDigit;
            console.log('Somma attuale:', somma);
        } else {
            console.log('Non hai inserito un valore numerico')
        }
    } else {
        console.log('Hai inserito più di una cifra');
        i--;
    }
}

console.log('Questo è il numero che hai inserito:', numberDigits);
console.log('Questo è il risultato della somma delle cifre:', somma);

// let numberDigit = prompt();
// console.log(numberDigit.length);
// numberDigit = parseInt(numberDigit);