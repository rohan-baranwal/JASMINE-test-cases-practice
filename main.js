function calculate(val) {
  const inputValue = val;
  const regExp = /\+|\-|\*|\//;

  const numberA = +inputValue.split(regExp)[0];
  const numberB = +inputValue.split(regExp)[1];
  const operation = inputValue.match(regExp);
  if (
    operation === null ||
    operation === undefined ||
    isNaN(numberA) ||
    isNaN(numberB)
  ) {
    updateResult("Expression not recognized");
    return;
  }
  const operator = operation[0];

  const calculator = new Calculator();
  calculator.add(numberA);

  let result;
  switch (operator) {
    case "+":
      result = calculator.add(numberB);
      break;
    case "-":
      result = calculator.subtract(numberB);
      break;
    case "*":
      result = calculator.multiply(numberB);
      break;
    case "/":
      result = calculator.divide(numberB);
      break;

    default:
      result = "Operation not recognized";
      break;
  }
  updateResult(result);
}

function updateResult(result) {
  let element = document.getElementById("result");
  if (element) {
    element.innerText = result;
  }
}

document.getElementById("inputValue") &&
  document.getElementById("inputValue").addEventListener("change", (event) => {
    calculate(event.target.value);
  });
