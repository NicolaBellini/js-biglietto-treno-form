// ----------INPUTS-----------
let inputName = document.getElementById("nome").value
let inputKm = document.getElementById("km").value
let age = document.getElementById("ageUser").value
const selectAge = age


//--------- ELEMENTS----------
let userName = inputName
let trip = inputKm
const kmPrice = 0.21
let price =  parseFloat ((trip * kmPrice).toFixed(2))
const form = document.getElementById("ticketForm")
// const price = parseFloat ((trip * kmPrice).toFixed(2))
// const oldPrice = parseFloat ((price * 0.6).toFixed(2))
// const babyPrice = parseFloat ((price * 0.8).toFixed(2))


//---------BUTTONS---------
const btnCheck = document.getElementById("btn1")



function priceMaker(){
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
  btnCheck.removeEventListener("click", handleClick);
}

btnCheck.addEventListener("click", handleClick);

function handleClick() {

  priceMaker();

  inputKm.value = ""
  inputName.value = ""
  age.value = ""

  btnCheck.addEventListener("click", handleClick);
};



// function handleClick(){

//   function priceMaker();

//   btnCheck.addEventListener("click", handleClick);
// }


