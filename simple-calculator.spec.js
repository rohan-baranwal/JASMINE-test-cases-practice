// test suite
// Suite --> group of tests
var Calculator = require("./simple-calculator.js");
describe("simple-calculator", () => {
  beforeEach(() => {});
  xit("should add number to the total", () => {
    const calculator = new Calculator();
    calculator.add(5);
    expect(calculator.total).toEqual(5);
    calculator.subtract(1);
    expect(calculator.total).toEqual(4);
  });

  it("should subtract number from the total", () => {
    const calculator = new Calculator();
    calculator.subtract(5);
    expect(calculator.total).toBe(-5);
  });

  it("should multiply number to the total", () => {
    const calculator = new Calculator();
    calculator.total = 5;
    calculator.multiply(5);
    expect(calculator.total).toBe(25);
  });

  it("should divide the total by number", () => {
    const calculator = new Calculator();
    calculator.total = 5;
    calculator.divide(5);
    expect(calculator.total).toBe(1);
  });

  it("should expect true to be true", () => {
    expect(true).toBeTrue();
  });
});
