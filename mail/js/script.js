// dichiaro variabile per campo input mail e button
let mailInput = document.getElementById('mail');
let btn = document.getElementById('v_btn')

// creo array con elenco mail
const elencoEmails = ['federicorossi@gmail.com', 'valezussino@libero.it', 'verdimattia@libero.it', 'pincopallo@gmail.com'];

// prendo il valore inserito nel campo email e lo cerco dentro l'array creando const
const provaV = function(){
    // prendo il value della mail
    let mailValue = mailInput.value;
    console.log(mailValue)
    // creo un check per l'array
    let checkEmail = false;
    // inizio a cercare
    for(let i = 0; i < elencoEmails.length; i++){
    // prendo valori in array
    const arrayValue = elencoEmails[i];
    // verifico con check
    if(mailValue == arrayValue){
        checkEmail = true;
    }}
    // messaggi
    if(checkEmail){
        document.getElementById('testo').innerHTML = 'ci sei'
    } else {
        document.getElementById('testo').innerHTML = 'non ci sei'
    }
}
btn.addEventListener('click', provaV)