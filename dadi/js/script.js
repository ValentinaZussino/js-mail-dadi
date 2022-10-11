// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// genero il numero casuale per il giocatore
// genero il numero casuale per il pc
// verifico il num maggiore
// ricordarsi il pareggio

let nPlayer = Math.floor(Math.random() * 6) + 1;
console.log(nPlayer)

let nComputer = Math.floor(Math.random() * 6) + 1;
console.log(nComputer)

if(nComputer > nPlayer){
    document.getElementById('result').innerHTML = 'Ha vinto il computer'
} else if(nPlayer > nComputer) {
    document.getElementById('result').innerHTML = 'Hai vinto tu'
} else {
    document.getElementById('result').innerHTML = 'Avete pareggiato'
}