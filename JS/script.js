
let form = document.getElementById("ticketForm")

function priceMaker() {
  const inputName = document.getElementById("name").value;
  const inputKm = document.getElementById("km").value;
  const age = document.getElementById("ageUser").value;
  
  const trip = parseFloat(inputKm);
  const kmPrice = 0.21;
  let price = parseFloat((trip * kmPrice).toFixed(2));
  
  if (age === "baby") {
    price *= 0.8;
  } else if (age === "old") {
    price *= 0.6;
  }
  
  console.log("Il prezzo del viaggio è:", price.toFixed(2));

  form.reset();
}

// svolgo la funzione priceMaker e resetto il form



const btnCheck = document.getElementById("btn1");

btnCheck.addEventListener("click", priceMaker);


