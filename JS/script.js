// ----------INPUT-----------
const inputName = document.getElementById("nome").value
const inputKm = document.getElementById("km").value


//--------- ELEMENT----------
const name = inputName
const trip = inputKm
const kmPrice = 0.21
const price = parseFloat ((trip*kmPrice).toFixed(2))
const oldPrice = parseFloat ((price*0.6).toFixed(2))
const babyPrice = parseFloat ((price*0.8).toFixed(2))


console.log(oldPrice);