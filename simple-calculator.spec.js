// const { CustomMatcher } = require("./custom-matcher.js");
// var Calculator = require("./simple-calculator.js");
describe("simple-calculator", () => {
  describe("Calculator", () => {
    let calculator;
    beforeEach(() => {
      calculator = new Calculator();
    });
    afterEach(() => {
      // Something here to execute after specs execution
    })
    // toBeUndefined, toBeDefined
    it("should have common methods", () => {
      expect(calculator.add).not.toBeUndefined();
      expect(calculator.subtract).toBeDefined();
      expect(calculator.multiply).toBeDefined();
      expect(calculator.divide).toBeDefined();
    });

    // toBeNull
    it("can overwrite total value", () => {
      calculator.total = null;
      expect(calculator.total).toBeNull();
    });

    // toContain
    it("should have Constructor name as Calculator", () => {
      expect(calculator.constructor.name).toContain("Calc");
    });

    // toBeNaN
    it("doesnot handle Nan for multiply", () => {
      calculator.total = 10;
      calculator.multiply("a");
      expect(calculator.total).toBeNaN();
    });

    // toThrow
    it("should throw an error", () => {
      calculator.total = 100;
      // takes a function instead of function call
      expect(() => calculator.divide(0)).toThrow();
      expect(() => calculator.divide(0)).toThrow(
        new ArithmeticError("number cannot be 0")
      );
    });

    // toThrowError
    it("should throw an error of specific type", () => {
      expect(() => calculator.divide(0)).toThrowError();
      expect(() => calculator.divide(0)).toThrowError("number cannot be 0");
      expect(() => calculator.divide(0)).toThrowError(
        ArithmeticError,
        "number cannot be 0"
      );
    });

    // toMatch
    it("should return a total number", () => {
      calculator.total = 10;
      calculator.add(10);
      expect(calculator.total).toMatch(/-?\d+/);
      expect(typeof calculator.total).toMatch("number");
    });

    // anything() Asymmetric Matcher
    it("it should return total as value", () => {
      calculator.total = 10;
      expect(calculator.total).toEqual(jasmine.anything());
      calculator.total = null;
      expect(calculator.total).not.toEqual(jasmine.anything());
      calculator.total = undefined;
      expect(calculator.total).not.toEqual(jasmine.anything());
    });

    // any() Asymmetric Matcher
    it("it should bear instance", () => {
      jasmine.addMatchers(customMatcher);
      calculator.total = 10;
      expect(calculator).toEqual(jasmine.any(Object));
      expect(calculator.total).toEqual(jasmine.any(Number));
      expect(calculator).toBeCalculator();
    });

    // objectContaining({}) Asymmteric Matcher
    it("should contain total as a key", () => {
      calculator.total = 10;
      expect(calculator).toEqual(
        jasmine.objectContaining({
          total: 10,
        })
      );
    });

    // stringContaining('') Asymmteric Matcher
    it("should have number type for total", () => {
      calculator.total = 10;
      expect(typeof calculator.total).toEqual(
        jasmine.stringContaining("number")
      );
    });

    it("should expect true to be true", () => {
      expect(true).toBeTrue();
    });

    describe("add()", () => {
      it("should add number to the total", () => {
        calculator.add(5);
        expect(calculator.total).toEqual(5);
        calculator.subtract(1);
        expect(calculator.total).toEqual(4);
      });
    });

    describe("subtract()", () => {
      it("should subtract number from the total", () => {
        calculator.subtract(5);
        expect(calculator.total).toBe(-5);
      });
    });

    describe("multiply()", () => {
      it("should multiply number to the total", () => {
        calculator.total = 5;
        calculator.multiply(5);
        expect(calculator.total).toBe(25);
      });
    });

    describe("divide()", () => {
      it("should divide the total by number", () => {
        calculator.total = 5;
        calculator.divide(5);
        expect(calculator.total).toBe(1);
      });
    });
  });
});
