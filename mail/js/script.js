// dichiaro variabile per campo input mail e button
let mailInput = document.getElementById('mail');
let searchBtn = document.getElementById('search-btn');

// creo array con elenco mail
const elencoEmails = ['federicorossi@gmail.com', 'valezussino@libero.it', 'verdimattia@libero.it', 'pincopallo@gmail.com'];

// creo funzione per btn
const search = function(){
    // prendo il value della mail
    let mailValue = mailInput.value;
    // creo un check per l'array
    let checkEmail = false;
    // creo ciclo
    for(let i = 0; i < elencoEmails.length; i++){
        // prendo valori in array
        const arrayValue = elencoEmails[i];
        // verifico con check
        if(mailValue == arrayValue){
        checkEmail = true;
    }
    }
    // messaggi
    if(checkEmail){
        document.getElementById('testo').innerHTML = 'Complimenti, sei presente!'
    } else {
        document.getElementById('testo').innerHTML = 'Non sei presente nel nostro elenco purtroppo'
    }
    // reset campo input mail
    mailInput.value = '';
}
// on click
searchBtn.addEventListener('click', search)