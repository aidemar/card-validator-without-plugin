
const button = document.getElementById("button");
const form = document.querySelector("form");
// console.log(form);
const sendInformation = e => {
  //Se.preventDefault();
  console.log(button);
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
};

button.addEventListener("click", sendInformation);

function validateCardDetails(element) {
  // console.log(array[2].value);
  let array = Array.from(element)
  let cvv = parseInt(array[2].value);
  cardVerificationVal(cvv);
}

validateCardDetails(form);

function cardVerificationVal(cvv) {
  if(cvv == "" && cvv <= 100 && cvv >= 999 && typeof cvv !== "number"){
    console.log("inválido");

  } else {
    console.log("valido");
  }
}
