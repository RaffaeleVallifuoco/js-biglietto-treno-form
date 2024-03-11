console.log ('console test');

// Inserimento età e km da percorrere

// leggo elementi dom e ascolto click
const submitElement = document.getElementById('submit'); //object

const distanceElement = document.getElementById('distance'); //string | null
console.log('distanza :  ' +distanceElement);

const ageElement = document.getElementById('age'); //string | null
console.log('età ; ' +ageElement);

submitElement.addEventListener('click', function() {
    console.log ('click sul submit')
    const distance = parseInt(distanceElement.value);
    console.log(distance);
    const age = parseInt(ageElement.value);
    console.log(age);
    let price_base = 0.21 * distance; //number
    price_base = price_base.toFixed(2);
    console.log('Il prezzo base è : ' + price_base + ' €');


    // calcolo buono sconto

    let discount = 0; //number 
    price_discount = price_base;
    const ticketPrice = document.getElementById('price');
    ticketPrice.innerHTML = 'Prezzo del biglietto : ' + price_discount + ' €';
    if (age < 18) {
        discount = price_base * 0.2;
        let price_discount = price_base - discount;
        console.log('Sconto 20% applicato');
        console.log('Prezzo scontato : ' + price_discount + ' €');
        const ticketPrice = document.getElementById('price');
        ticketPrice.innerHTML = 'Prezzo del biglietto : ' + price_discount + ' €';
    } else if (age >= 65) {
        discount = price_base * 0.4;
        let price_discount = price_base - discount;
        console.log('Sconto 40% applicato');
        console.log('Prezzo scontato : ' + price_discount + ' €');
        const ticketPrice = document.getElementById('price');
        ticketPrice.innerHTML = 'Prezzo del biglietto : ' + price_discount + ' €';
    

    
    }
    
})


const ticketKm = document.getElementById('kmSummary');
ticketKm.innerHTML = 'Totale Kilometri : ' +distance;

const ticketDiscount = document.getElementById('discountSummary');
ticketDiscount.innerHTML = 'Sconto applicato : '  +distanceElement.value;



            