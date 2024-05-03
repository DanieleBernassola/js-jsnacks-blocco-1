'use strict';

let numberDigits = [];
let somma = 0;

for (let i = 1; i <= 4; i++){
    // Inserimento cifra
    let numberDigit = prompt(`Inserisci la ${i}a cifra`);
    // Verifica se è una sola cifra
    if (numberDigit.length === 1){
        // Converte in numero
        numberDigit = parseInt(numberDigit);
        console.log('Hai inserito la seguente cifra:', numberDigit);
        // Verifica se è numero
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