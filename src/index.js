const display = document.getElementById("display");
let num1 = ""; // first operand
let num2 = ""; // second operand
let operator = null; // operator being used

const setOperands = (num) => {
  if (!operator) {
    num1 = num1 && num1.includes('.') && num === '.' ? num1 : `${num1}${num}`;
    display.textContent = num1.toString();
  } else {
    num2 = num2 && num2.includes('.') && num === '.' ? num2 : `${num2}${num}`;
    display.textContent = num2.toString();
  }
};

function setOperator(newOperator) {
  if (operator !== null) {
    equal();
  }
  operator = newOperator;
}

function deleteNumber() {
  num1 = "";
  num2 = "";
  operator = null;
  display.textContent = "0";
}

function decimal() {
  const targetNum = !operator ? num1 : num2;
  const updateNum = !operator ? (num) => num1 = num : (num) => num2 = num;

  if (!targetNum.includes('.')) {
    updateNum(targetNum ? `${targetNum}.` : '0.');
    display.textContent = !operator ? num1 : num2;
  }
}

const setAddition = () => operator = "add";
const setSubtraction = () => operator = "minus";
const setMultiplication = () => operator = "multiply";
const setDivision = () => operator = "divide";

const equal = () => {
  if (num1 === "" || operator === null) {
    return;
  }
  let result;
  switch (operator) {
    case "add":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "minus":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "multiply":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "divide":
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      return;
  }
  num2 = "";
  num1 = result.toString();
  operator = null;
  display.innerText = result;
};



