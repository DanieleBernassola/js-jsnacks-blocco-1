Snack 8

<!-- Chiedi un numero di 4 cifre all’utente -->

- creo un array numberDigits e lo lascio vuoto
- creo una variabile numberDigit e salvo il valore di un prompt
- verifico la lunghezza della cifra    console.log(numberDigit.length);

<!-- Calcola la somma di tutte le cifre che compongono il numero. -->

- creo una variabile somma e la inizializzo a 0

for (let i = 1; i <= 4; i++){
    let numberDigit = prompt();
    SE (!isNaN && numberDigit.length === 1){
        numberDigit = parseInt(numberDigit);
        numberDigits.push(numberDigit);
        somma += numberDigits[i];
    } else {
        console.log('Non hai inserito un valore numerico o hai inserito più di una cifra');
        i--;
    }
}

<!-- Stampa il risultato in console -->

console.log(somma);