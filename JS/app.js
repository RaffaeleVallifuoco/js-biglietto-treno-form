console.log ('console test');

// Inserimento età e km da percorrere

let distance = prompt('Inserisci i chilometri che desieri percorrere'); //string | null
distance = parseInt(distance); //number | null
console.log('distanza: ' +distance + ' km');
let age = prompt('Inserisci la tua età'); //string | null
age = parseInt(age).toFixed(2); //number ! null
console.log('età: '+ age +' anni');


// calcolo prezzo base del biglietto

let price_base = 1.21*distance; //number
price_base = price_base.toFixed(2);
console.log ('Il prezzo base è : ' + price_base +' €');


// calcolo buono sconto

let discount = 0; //number 
price_discount=price_base;
if (age < 18) {
    discount = price_base * 0.2;
    let price_discount = price_base - discount;
    console.log ('Sconto 20% applicato' );
    console.log ('Prezzo scontato : ' +price_discount + ' €') ;
} else if (age >= 65) {
    discount = price_base * 0.4;
    let price_discount = price_base - discount;
    console.log('Sconto 40% applicato');
    console.log('Prezzo scontato : ' + price_discount + ' €');
}

const ticketPrice = document.getElementById ('price');
ticketPrice.innerHTML= 'Prezzo del biglietto : '+ price_discount;

            