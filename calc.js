// first UI & StyleSheet
// Clickable Buttons + Assign Variables
// Click Buttons and get the values
// click buttons and get the values on display
// number key/operatorkey
// assign operatorkey
// and assign clear button

let firstNumber = 0;

const display = document.querySelector(".display");
const keys = document.querySelector(".button-container");
const plus = document.getElementById("plus");

console.log(plus);
plus.addEventListener("click", (event) => {
  firstNumber = display.textContent;
  console.log(firstNumber);
});

const equal = document.getElementById("equal");
equal.addEventListener("click", (event) => {
  display.textContent = parseInt(firstNumber) + parseInt(display.textContent);
});

keys.addEventListener("click", (event) => {
  // console.log(event.target);
  if (event.target.innerHTML == "=") {
    return;
  } else if (event.target.innerHTML == "AC") {
    return (display.textContent = " ");
  } else {
    const value = event.target;
    const keyValue = value.textContent;
    // console.log(keyValue);
    const displayvalue = display.textContent;
    // console.log(displayvalue);
    display.textContent = keyValue;
  }
});
