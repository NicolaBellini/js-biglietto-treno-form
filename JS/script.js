
let form = document.getElementById("ticketForm")
let cost = document.getElementById("ticketPrice")
let offerType = document.getElementById("offertype")
let nameOnTicket = document.getElementById("ticket-name")
let popUpTicket = document.getElementById("ticket")

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

  nameOnTicket.innerHTML = inputName
  offerType.innerHTML = age
  cost.innerHTML = price.toFixed(2) + " euro"

  form.reset();
}


// svolgo la funzione priceMaker e resetto il form



const btnCheck = document.getElementById("btn1");

btnCheck.addEventListener("click", priceMaker);


