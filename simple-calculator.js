class ArithmeticError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ArithmeticError';
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
  }
}

function Calculator() {
  this.total = 0;
}

Calculator.prototype.add = function (number) {
  return (this.total += number);
};
Calculator.prototype.subtract = function (number) {
  return (this.total -= number);
};
Calculator.prototype.multiply = function (number) {
  return (this.total *= number);
};
Calculator.prototype.divide = function (number) {
  if (number === 0) {
    throw new ArithmeticError('number cannot be 0');
  }
  return (this.total /= number);
};
/**
 
 class Calculator {
   constructor() {
     this.total = 0;
   }
   add(number) {
     return (this.total += number);
   }
   subtract(number) {
     return (this.total -= number);
   }
   multiply(number) {
     return (this.total *= number);
   }
   divide(number) {
     if (number === 0) {
       throw new Error("number cannot be 0");
     }
     return (this.total /= number);
   }
 }
 
 module.exports = Calculator;
 */
