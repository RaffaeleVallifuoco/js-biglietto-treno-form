// console test 
console.log ('console test');


// leggo elementi dom e ascolto click
const submitElement = document.getElementById('submit'); //object

const distanceElement = document.getElementById('distance'); //string | null
console.log('distanza :  ' + distanceElement);

const ageElement = document.getElementById('age'); //string | null
console.log('età ; ' + ageElement);

//ascolto clic e azioni post

submitElement.addEventListener('click', function() {
    console.log ('click sul submit')
    const distance = parseInt(distanceElement.value);
    console.log(distance);
    const age = ageElement.value;
    console.log(age);
    let price_base = 0.21 * distance; //number
    price_base = price_base.toFixed(2);
    console.log('Il prezzo base è : ' + price_base + ' €');


    // calcolo buono sconto

    let discount = 0; //number 
    price_discount = price_base; //number
    const ticketPrice = document.getElementById('price'); //object
    ticketPrice.innerHTML = 'Prezzo del biglietto : ' + price_discount + ' €'; //string

    if (age == 'under') {
        discount = price_base * 0.2;
        let price_discount= price_base - discount;
        price_discount.toFixed(2);
        console.log('Sconto 20% applicato');
        console.log('Prezzo scontato : ' + price_discount + ' €');
        const discountShow = document.getElementById('sale');
        discountShow.innerHTML = 'Applicato sconto 20%';
        const ticketPrice = document.getElementById('price');
        ticketPrice.innerHTML = 'Prezzo del biglietto : ' + price_discount + ' €';
    } else if (age =='over') {
        discount = price_base * 0.4;
        let price_discount = price_base - discount;
        price_discount.toFixed(2);
        console.log('Sconto 40% applicato');
        console.log('Prezzo scontato : ' + price_discount + ' €');
        const discountShow = document.getElementById('sale');
        discountShow.innerHTML = 'Applicato sconto 40%';
        const ticketPrice = document.getElementById('price');
        ticketPrice.innerHTML = 'Prezzo del biglietto : ' + price_discount + ' €';    
    }
    
    // viAUlizza in htnl il orezzo finale

    const ticketKm = document.getElementById('kmSummary');
    ticketKm.innerHTML = 'Totale Kilometri : ' + distance;

})





            