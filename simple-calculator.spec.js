// test suite
// Suite --> group of tests
var Calculator = require("./simple-calculator.js");
describe("simple-calculator", () => {
  beforeEach(() => {});
  it("should add number to the total", () => {
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

  // toBeUndefined, toBeDefined
  it("should have common methods", () => {
    const calculator = new Calculator();
    expect(calculator.add).not.toBeUndefined();
    expect(calculator.subtract).toBeDefined();
    expect(calculator.multiply).toBeDefined();
    expect(calculator.divide).toBeDefined();
  });

  // toBeNull
  it("can overwrite total value", () => {
    const calculator = new Calculator();
    calculator.total = null;
    expect(calculator.total).toBeNull();
  });

  // toContain
  it("should have Constructor name as Calculator", () => {
    const calculator = new Calculator();
    expect(calculator.constructor.name).toContain("Calc");
  });

  // toBeNaN
  it("doesnot handle Nan for multiply", () => {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.multiply("a");
    expect(calculator.total).toBeNaN();
  });

  // toThrow
  it("should throw an error", () => {
    const calculator = new Calculator();
    calculator.total = 100;
    // takes a function instead of function call
    expect(() => calculator.divide(0)).toThrow();
    expect(() => calculator.divide(0)).toThrow(new Error("number cannot be 0"));
  });

  // toThrowError
  it("should throw an error of specific type", () => {
    const calculator = new Calculator();
    expect(() => calculator.divide(0)).toThrowError();
    expect(() => calculator.divide(0)).toThrowError("number cannot be 0");
    expect(() => calculator.divide(0)).toThrowError(
      Error,
      "number cannot be 0"
    );
  });

  // toMatch
  it("should return a total number", () => {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.add(10);
    expect(calculator.total).toMatch(/-?\d+/);
    expect(typeof calculator.total).toMatch("number");
  });

  // anything() Asymmetric Matcher
  it("it should return total as value", () => {
    const calculator = new Calculator();
    calculator.total = 10;
    expect(calculator.total).toEqual(jasmine.anything());
    calculator.total = null;
    expect(calculator.total).not.toEqual(jasmine.anything());
    calculator.total = undefined;
    expect(calculator.total).not.toEqual(jasmine.anything());
  });

  // any() Asymmetric Matcher
  it("it should bear instance", () => {
    const calculator = new Calculator();
    calculator.total = 10;
    expect(calculator).toEqual(jasmine.any(Object));
    expect(calculator.total).toEqual(jasmine.any(Number));
  });

  // objectContaining({}) Asymmteric Matcher
  it("should contain total as a key", () => {
    const calculator = new Calculator();
    calculator.total = 10;
    expect(calculator).toEqual(
      jasmine.objectContaining({
        total: 10,
      }));
    });
    
    
  // stringContaining('') Asymmteric Matcher
  it('', () => {
    const calculator = new Calculator();
    calculator.total = 10;
    expect(typeof calculator.total).toEqual(jasmine.stringContaining('number'))
  });
  it("should expect true to be true", () => {
    expect(true).toBeTrue();
  });
});
