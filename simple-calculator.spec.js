// test suite
// Suite --> group of tests
var Calculator = require('./simple-calculator.js')
describe("simple-calculator", () => {
  beforeEach(() => {});
  it("should add number to the total", () => {
    const calculator = new Calculator();
    calculator.add(5);
    expect(calculator.total).toEqual(5);
  });
  it("should subtract number from the total", () => {
    
  });
  it("should multiply number to the total", () => {
    
  });
  it("should divide the total by number", () => {
    
  });
  it("should expect true to be true", () => {
    expect(true).toBeTrue();
  });
});
