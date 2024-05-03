Snack 5

<!-- Crea un array vuoto. -->

- creo un array oddNumbers e lo lascio vuoto

<!-- Chiedi per 6 volte all’utente di inserire un numero, -->

- in una variabile number salvo il valore di un prompt

- for(let i = 1; i <= 6; i++){
    let number = parseInt(prompt(`Inserisci il numero ${i}`));
    SE (!isNan(number)){
        console.log('Hai inserito questo numero:', number);
       <!-- Se è dispari inseriscilo nell’array. -->
        SE (number % 2 = 1){
            oddNumbers.push(number);
        } 
    } else {
        console.log('Non hai inserito un valore numerico');
        i--;
    }
}

<!-- Stampa in console l'array risultante. -->

- console.log('Questo è il contenitore dei numeri dispari:' oddNumbers);