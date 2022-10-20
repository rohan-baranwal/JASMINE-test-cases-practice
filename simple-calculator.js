function Calculator() {
  this.total = 0;
}

Calculator.prototype.add = (number) => (this.total += number);
Calculator.prototype.subtract = (number) => (this.total -= number);
Calculator.prototype.multiply = (number) => (this.total *= number);
Calculator.prototype.divide = (number) => (this.total /= number);
