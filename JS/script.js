
let form = document.getElementById("ticketForm")
let cost = document.getElementById("ticketPrice")
let offerType = document.getElementById("offertype")
let nameOnTicket = document.getElementById("ticket-name")
let popUpTicket = document.getElementById("ticket")
let carr = document.getElementById("carrozza")
let seat = document.getElementById("seat")

const minCarrozza = 1;
const maxCarrozza = 5;
const minCodPosto = 1;
const maxCodPosto = 1000;
const numberCarrozza = (Math.floor (Math. random() * (maxCarrozza - minCarrozza + 1) + minCarrozza));
const numberPosto = (Math.floor (Math. random() * (maxCodPosto - minCodPosto + 1) + minCodPosto));

function priceMaker() {
  const inputName = document.getElementById("name").value;
  const inputKm = parseInt(document.getElementById("km").value);
  const age = document.getElementById("ageUser").value;

  
  const trip = parseFloat(inputKm);
  const kmPrice = 0.21;
  let price = parseFloat((trip * kmPrice).toFixed(2));
  
  if (age === "Young") {
    price *= 0.8;
  } else if (age === "Senior") {
    price *= 0.6;
  }
  
  console.log("Il prezzo del viaggio è:", price.toFixed(2));

  
  popUpTicket.classList.remove("d-none")
  

// stampo tutto in pagina
  nameOnTicket.innerHTML = inputName
  offerType.innerHTML = age
  cost.innerHTML = price.toFixed(2) + " euro"
  carr.innerHTML = numberCarrozza
  seat.innerHTML = numberPosto

  // resetto il form
  form.reset();
}

// svolgo la funzione priceMaker e resetto il form
const btnCheck = document.getElementById("btn1");

// il bottone fa la funzione pricemaker
btnCheck.addEventListener("click", priceMaker);

// numero carrozza random
console.log (Math.floor (Math. random() * (maxCarrozza - minCarrozza + 1) + minCarrozza));

// numero posto random
console.log (Math.floor (Math. random() * (maxCodPosto - minCodPosto + 1) + minCodPosto))


