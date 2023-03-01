// set the first number
// Set the operator (via the +, -, x, / buttons)
// Set the second number
// Tell the calculator to calculate (via the = button)

let display = document.getElementById("display");
let num1 = ""; // first operand
let num2 = ""; // second operand
let operator = null; // operator being used

function addNumber(num) {
    if (num1 === 0) {
        num2 = num;
    } else {
    num2 += num;
    }
    display.textContent = num2;
}

function deleteNumber() {
    num2 = num2.slice(0, -1); //slice(start, end) method deletes the last character of the string stored in num2 
    if (num2 === "") {
      num2 = "0";
    }
    display.textContent = num2;
  }
  
function clear() {
    num1 = null;
    num2 = "";
    operator = null;
    display.innerText = "0";
  }
 
function decimal() {
    if (!num2.includes(".")) {
        num2 += ".";
      }
      display.textContent = num2;
    }

const add = () => {
    operator = "add";
    num1 = parseFloat(num2);
    num2 = "";
}

const minus = () => {
    operator = "minus";
    num1 = parseFloat(num2);
    num2 = "";
}

const multiply = () => {
    operator = "multiply";
    num1 = parseFloat(num2);
    num2 = "";
}

const divide = () => {
    operator = "divide";
    num1 = parseFloat(num2);
    num2 = "";
}

const equal = () => {
    if (num1 === null || operator === null) { 
      return; // If num1 or operator is null, the function returns nothing and does not perform any calculations.
    }
    let result;
    switch (operator) {
      case "add":
        result = num1 + parseFloat(num2);
        break;
      case "minus":
        result = num1 - parseFloat(num2);
        break;
      case "multiply":
        result = num1 * parseFloat(num2);
        break;
      case "divide":
        result = num1 / parseFloat(num2);
        break;
      default:
        return;
    }
    num2 = result.toString();
    num1 = null;
    operator = null;
    display.innerText = num2;
  }
  
  // function to set the operator to the new operator string
  function setOperator(newOperator) {
    if (num1 !== null && operator !== null) {
      equal();
    }
    operator = newOperator;
    num1 = parseFloat(num2);
    num2 = "";
  }




