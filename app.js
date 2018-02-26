//
// const button = document.getElementById("button");
// const form = document.querySelector("form");
// // console.log(form);
// const sendInformation = e => {
//   //Se.preventDefault();
//   console.log(button);
//   if (validateCardDetails(form)) {
//     console.log("datos válido... enviar...");
//   } else {
//     console.log("datos inválidos");
//   }
// };
//
// button.addEventListener("click", sendInformation);
//
// function validateCardDetails(element) {
//   // console.log(array[2].value);
//   let array = Array.from(element)
//   let cvv = parseInt(array[2].value);
//   cardVerificationVal(cvv);
// }
//
// validateCardDetails(form);
//
// function cardVerificationVal(cvv) {
//   if(cvv == "" && cvv <= 100 && cvv >= 999 && typeof cvv !== "number"){
//     console.log("inválido");
//
//   } else {
//     console.log("valido");
//   }
// }4


// Validar cvv

const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});




function validateCardDetails(element) {

  // console.log(array[2].value);

  let array = Array.from(element)

  let numberCard = (array[0].value);

  console.log(numberCard);
  let cvv = parseInt(array[2].value);

  ccvVerification(cvv);
  validateCreditCardNumber(numberCard);


}


//validateCardDetails(form);

//form = "<form><iput>..."


function ccvVerification(cvv) {

  //cvv="<form><iput>..."
  let inputborder = document.getElementById("cvv");

  if(cvv != "" && cvv >= 100 && cvv <= 999 && typeof cvv == "number"){

    /*console.log("válido");*/
    inputborder.classList.add("vaLidation");

  } else {

  /*  console.log("invalido");*/
    inputborder.classList.add("error");

  }

}

// Validar número de la tarjeta

// numberCard != ""
// &&

//Funcion uno para validar que sean 16 números
function validLenghtCardNumber(item) {
  if(item.trim().length === 16){
    return item;
  }
}


/* function textLength(input) {
    if (input.trim().length === 16) {
      return input;
    }
  }*/
function validateCreditCardNumber(numberCard) {
  if(numberCard.length === 16){
    console.log("válido");
  }else {
    console.log("invalido");

  }
}
