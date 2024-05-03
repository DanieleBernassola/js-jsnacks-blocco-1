'use strict';

// Inizializzazione variabili
let somma = 0;
let media = 0;

for(let i = 1; i <= 4; i++){
    // Inserimento numeri
    let number = parseInt(prompt(`Inserisci il numero ${i}`));
    // Verifica se è un numero
    if (!isNaN(number)){
        console.log('Hai inserito questo numero:', number);
        somma += number;
        media = somma / i;
    } else {
        console.log('Non hai inserito un valore numerico');
        i--;
    }
}

console.log('La somma dei numeri inseriti è:', somma);
console.log('La media dei numeri inseriti è:', media);