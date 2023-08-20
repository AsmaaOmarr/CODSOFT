let currentInput = "";
let currentOperator = "";
let previousInput = "";

function appendNum(number) {
  currentInput += number;
  updateResult();
}

function appendOperator(operator) {
  if (currentInput !== "") {
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = "";
  }
}

function calculate() {
  if (currentInput !== "" && previousInput !== "" && currentOperator !== "") {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (currentOperator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }

    currentInput = result.toString();
    currentOperator = "";
    previousInput = "";
    updateResult();
  }
}
function clearResult() {
  currentInput = "";
  currentOperator = "";
  previousInput = "";
  updateResult();
}
function deleteNum() {
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -1);
    updateResult();
  }
}
function updateResult() {
  document.getElementById("result").value = currentInput;
}
