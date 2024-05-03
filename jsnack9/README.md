Snack 9

<!-- Calcola la somma e la media dei primi 10 numeri. -->

- creo una variabile number e salvo il valore di un prompt
- creo una variabile somma e la inizializzo a 0
- creo una variabile media e la inizializzo a 0

- for(let i = 1; i <= 10; i++){
    let number = parseInt(prompt(`Inserisci il numero ${i}`));
    SE (!isNaN(number)){
        console.log('Hai inserito questo numero:', number);
        somma += number;
        media = somma / i;
    } else {
        console.log('Non hai inserito un valore numerico');
        i--;
    }
}

<!-- Stampa i risultati in console -->

- console.log('La somma dei numeri inseriti è:', somma);
- console.log('La media dei numeri inseriti è:', media);