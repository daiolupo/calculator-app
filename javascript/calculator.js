/**
 * JavaScript Calculator
filename: calculator.js

Author: Dwain Aiolupotea
created: 01 September 2021
updated: 07 September 2021
*/

// get number values from user input
let num1 = document.querySelector("#num1").value;
let num2 = document.querySelector("#num2").value;
let result = document.querySelector("#result");

// get nodes +, -, x, /, %, reset and close buttons
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let modulo = document.querySelector("#modulo");
let reset = document.querySelector("#reset");
let exit = document.querySelector("#exit");

// Calculate addition function and test for invalid input
function add() {
  let num1 = parseInt(document.querySelector("#num1").value);
  let num2 = parseInt(document.querySelector("#num2").value);
  let result = document.querySelector("#result");
  if (isNaN(num1) || isNaN(num2)) {
    document.querySelector(
      "#result"
    ).textContent = `One of the inputs is not a number!`;
  } else {
    result = num1 + num2;
    document.querySelector(
      "#result"
    ).textContent = `Result: ${num1} + ${num2} = ${result}`;
  }
}
// Calculate subtraction function test for invalid input
function sub() {
  let num1 = parseInt(document.querySelector("#num1").value);
  let num2 = parseInt(document.querySelector("#num2").value);
  let result = document.querySelector("#result");
  if (isNaN(num1) || isNaN(num2)) {
    document.querySelector(
      "#result"
    ).textContent = `One of the inputs is not a number!`;
  } else {
    result = num1 - num2;
    document.querySelector(
      "#result"
    ).textContent = `Result: ${num1} - ${num2} = ${result}`;
  }
}
// Calculate multiplication function test for invalid input
function times() {
  let num1 = parseInt(document.querySelector("#num1").value);
  let num2 = parseInt(document.querySelector("#num2").value);
  let result = document.querySelector("#result");
  if (isNaN(num1) || isNaN(num2)) {
    document.querySelector(
      "#result"
    ).textContent = `One of the inputs is not a number!`;
  } else {
    result = num1 * num2;
    document.querySelector(
      "#result"
    ).textContent = `Result: ${num1} * ${num2} = ${result}`;
  }
}
// Calculate division function test for invalid input
function div() {
  let num1 = parseInt(document.querySelector("#num1").value);
  let num2 = parseInt(document.querySelector("#num2").value);
  let result = document.querySelector("#result");
  if (isNaN(num1) || isNaN(num2)) {
    document.querySelector(
      "#result"
    ).textContent = `One of the inputs is not a number!`;
  } else {
    result = num1 / num2;
    document.querySelector(
      "#result"
    ).textContent = `Result: ${num1} / ${num2} = ${result}`;
  }
}
// Calculate division function test for invalid input
function remainder() {
  let num1 = parseInt(document.querySelector("#num1").value);
  let num2 = parseInt(document.querySelector("#num2").value);
  let result = document.querySelector("#result");
  if (isNaN(num1) || isNaN(num2)) {
    document.querySelector(
      "#result"
    ).textContent = `One of the inputs is not a number!`;
  } else {
    result = num1 % num2;
    document.querySelector(
      "#result"
    ).textContent = `Result: ${num1} % ${num2} = ${result}`;
  }
}
// Clear the input values + result box
function clear() {
  let num1 = parseInt((document.querySelector("#num1").value = ""));
  let num2 = parseInt((document.querySelector("#num2").value = ""));
  let result = (document.querySelector("#result").textContent = "");
}

// Close calculator app function
function close() {
  document.querySelector("form").style.display = "none";
  document.querySelector("#result").textContent =
    "Thank you for using this calculator app!";
}

// Event Handlers button clicks and calling the calculation +, -, *, /, %, clear, and close functions
plus.addEventListener("click", add);
minus.addEventListener("click", sub);
multiply.addEventListener("click", times);
divide.addEventListener("click", div);
modulo.addEventListener("click", remainder);
reset.addEventListener("click", clear);
exit.addEventListener("click", close);

// Event handlers for changing background color
// for in loop onmouseover/onmouseout over buttons
btn = document.querySelectorAll("button");
for (i in btn) {
  btn[i].onmouseover = function () {
    this.style.backgroundColor = "rgb(110, 110, 255)";
  };
  btn[i].onmouseout = function () {
    this.style.backgroundColor = "rgb(77, 76, 255)";
  };
}
