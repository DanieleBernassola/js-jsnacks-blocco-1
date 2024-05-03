'use strict';

// array numeri dispari vuoto
let oddNumbers = [];

for(let i = 1; i <= 6; i++){
    // inserimento numeri
    let number = parseInt(prompt(`Inserisci il ${i}o numero`));
    // verifica se è un numero
    if (!isNaN(number)){
        console.log('Hai inserito questo numero:', number);
        if (number % 2 === 1) {
            // se il numero è dispari lo aggiunge all'array
            oddNumbers.push(number);
        } 
    } else {
        console.log('Non hai inserito un valore numerico');
        i--;
    }
}

console.log('Questo è il contenitore dei numeri dispari:', oddNumbers);