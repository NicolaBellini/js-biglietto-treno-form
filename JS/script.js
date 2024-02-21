// ----------INPUT-----------
const inputName = document.getElementById("nome").value
const inputKm = document.getElementById("km").value
const age = document.getElementById("ageUser").value
const selectAge = age


//--------- ELEMENT----------
const name = inputName
const trip = inputKm
const kmPrice = 0.21
let price =  parseFloat ((trip * kmPrice).toFixed(2))
// const price = parseFloat ((trip * kmPrice).toFixed(2))
// const oldPrice = parseFloat ((price * 0.6).toFixed(2))
// const babyPrice = parseFloat ((price * 0.8).toFixed(2))

if(selectAge === "baby"){
  price = parseFloat ((price * 0.8).toFixed(2))
  console.log(price);
}else if(selectAge === "normal"){
  price = parseFloat ((trip * kmPrice).toFixed(2))
  console.log(price);
}else if(selectAge === "old"){
  price = parseFloat ((price * 0.6).toFixed(2))
  console.log(price);
}


// console.log(price);