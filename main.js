const calculate = (event) => {
  const inputValue = event.target.value;
  const regExp = /\+|\-|\*|\//;

  const numberA = +inputValue.split(regExp)[0];
  const numberB = +inputValue.split(regExp)[1];
  const operator = inputValue.match(regExp)[0];

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
      break;
  }
  updateResult(result);
};

const updateResult = (result) => {
  let element = document.getElementById("result");
  if (element) {
    element.innerText = result;
  }
};
document.getElementById("inputValue").addEventListener("change", calculate);
