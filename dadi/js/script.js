// metto tutto in una funzione
const play = function(){
    // genero il numero casuale per il giocatore
    let nPlayer = Math.floor(Math.random() * 6) + 1;
    // metto a schermo nPlayer
    document.getElementById('player-number').innerHTML = nPlayer;
    // genero il numero casuale per il pc
    let nComputer = Math.floor(Math.random() * 6) + 1;
    // metto a schermo nComputer
    document.getElementById('pc-number').innerHTML = nComputer;
    // verifico il num maggiore e ricordarsi il pareggio
    if(nComputer > nPlayer){
        document.getElementById('result').innerHTML = 'Ha vinto il computer'
    } else if(nPlayer > nComputer) {
        document.getElementById('result').innerHTML = 'Hai vinto tu'
    } else {
        document.getElementById('result').innerHTML = 'Avete pareggiato'
    }
}
// on click
let btn = document.getElementById('play-btn');
btn.addEventListener('click', play)