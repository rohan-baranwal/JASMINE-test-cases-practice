const calculate = (event) => {
  const inputValue = event.target.value;
  const regExp = /\+\-\*\//;

  const numberA = +inputValue.split(regExp)[0];
  const numberB = +inputValue.split(regExp)[1];
  const operator = inputValue.match(regExp)[0];

  const calculator = new Calculator();

};
document.getElementById("inputValue").addEventListener("change", calculate);
