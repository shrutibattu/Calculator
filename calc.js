// first UI & StyleSheet
// Clickable Buttons + Assign Variables
// Click Buttons and get the values
// click buttons and get the values on display
// number key/operatorkey
// assign operatorkey
// and assign clear button

let firstNumber = 0;
let secondNumber = 0;
let operationAddition = false;
let operationMultiply = false;
let operationDivide = false;

const display = document.querySelector(".display");
const keys = document.querySelector(".button-container");
const plus = document.getElementById("plus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

divide.addEventListener("click", (event) => {
  firstNumber = display.textContent;
  operationDivide = true;
});
multiply.addEventListener("click", (event) => {
  firstNumber = display.textContent;
  operationMultiply = true;
});

plus.addEventListener("click", (event) => {
  firstNumber = display.textContent;
  operationAddition = true;
});

const equal = document.getElementById("equal");

equal.addEventListener("click", (event) => {
  secondNumber = display.textContent;
  // display.textContent = parseInt(firstNumber) + parseInt(display.textContent);
  if (operationMultiply == true) {
    display.textContent = product(firstNumber, secondNumber);
    operationMultiply = false;
  } else if (operationAddition == true) {
    display.textContent = add(firstNumber, secondNumber);
    operationAddition = false;
  } else {
    display.textContent = division(firstNumber, secondNumber);
    operationDivide = false;
  }

  // display.textContent = division(firstNumber, secondNumber);
});

keys.addEventListener("click", (event) => {
  if (event.target.innerHTML == "=") {
    return;
  } else if (event.target.innerHTML == "AC") {
    return (display.textContent = " ");
  } else {
    const value = event.target;
    const keyValue = value.textContent;
    const displayvalue = display.textContent;
    display.textContent = keyValue;
  }
});

function add(param1, param2) {
  // alert("Param1 " + parseInt(param1) + " Param2 " + parseInt(param2));
  return parseInt(param1) + parseInt(param2);
}

function product(param1, param2) {
  return parseInt(param1) * parseInt(param2);
}

function division(param1, param2) {
  return parseInt(param1) / parseInt(param2);
}
