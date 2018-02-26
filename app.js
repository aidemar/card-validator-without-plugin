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
  let array = Array.from(element);
  let numberCard = parseInt(array[0].value);
  console.log(numberCard);
  let cvv = parseInt(array[2].value);
  let name = array[3].value;

  ccvVerification(cvv);
  validateCreditCardNumber(numberCard);
  nameValidation(name);

}

function nameValidation(name) {
  if(name != "") {
    console.log("válido");
  }else {
    console.log("inválido");
  }

}
//validateCardDetails(form);
//form = "<form><iput>..."

function ccvVerification(cvv) {

  //cvv="<form><iput>..."
  let inputborder = document.getElementById("cvv");
  if(cvv != "" && cvv >= 000 && cvv <= 999 && typeof cvv == "number"){

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

//Funcion para validar que sean 16 números
// function validLenghtCardNumber(item) {
//   if(item.trim().length === 16){
//     return item;
//   }
// }


/* function textLength(input) {
    if (input.trim().length === 16) {
      return input;
      1231231231231233
      asdasdasdasdasda
      (numberCard.length === 16) &&
    }
  }*/

  function validateCreditCardNumber(numberCard) {
    if(numberCard.length === 16){
      console.log("válido");
    }else {
      console.log("inválido");
    }
  }

  //Validar Nombre



  // Algoritmo de Lunh

  function luhnAlgorithm(cardNumbers) {
    let cardNumbersReversed = cardNumbers;
    .toString();
    .split("");
    .reverse();
    .map(number => parseInt(number));

      // console.log(cardNumbersReversed);
      let multiplyOddbyTwo =cardNumbersReversed.map((number, index) => {
        if(index % 2 != 0) {
          return number * 2;
        } else {
          return number;
        }
      });

  multiplyOddbyTwo.map(number => {
    if(number >= 10){
      return number -9;
    }
  });

  console.log(cardNumbers);
  console.log(cardNumbersReversed);
  console.log();
  console.log();
  }
