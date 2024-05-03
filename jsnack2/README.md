<!-- L’utente inserisce due parole in successione, con due prompt. -->

- creo una variabile parola1 e salvo il valore di un prompt
- creo una variabile parola2 e salvo il valore di un prompt

<!-- Il software stampa prima la parola più corta, poi la parola più lunga. -->

SE (parola1.length <= parola2.length){
    console.log(parola1 + parola2)
} Altrimenti {
    console.log(parola2 + parola1)
}