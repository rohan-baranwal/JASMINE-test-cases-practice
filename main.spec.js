describe("main.js", () => {
  describe("calculate()", () => {
    it("should validate expression if the first number is invalid", () => {
      spyOn(window, "updateResult"); // and.stub() is the default one and can be omitted.
      calculate("a+3");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it("should validate expression if the second number is invalid", () => {
      spyOn(window, "updateResult").and.stub();
      calculate("3+b");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it("should validate expression if the operation is invalid", () => {
      spyOn(window, "updateResult").and.stub();
      calculate("3=3");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it("should call add", () => {
      const spy = spyOn(Calculator.prototype, "add");
      // const spy = Calculator.prototype.add;
      calculate("3+5");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(2);
      // called 2 times from different places
      expect(spy).toHaveBeenCalledWith(3);
      expect(spy).toHaveBeenCalledWith(5);
    });

    it("should call subract", () => {
      const spy = spyOn(Calculator.prototype, "subtract");
      // const spy = Calculator.prototype.subtract;
      calculate("8-2");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(2);
    });

    it("should call multiply", () => {
      const spy = spyOn(Calculator.prototype, "multiply");
      // const spy = Calculator.prototype.multiply;
      calculate("8*2");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(2);
    });

    it("should call divide", () => {
      const spy = spyOn(Calculator.prototype, "divide");
      // const spy = Calculator.prototype.divide;
      calculate("8/2");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(2);
    });

    it("should validate operation", () => {
      // spyOn();
    });

    it("should call updateResult() - using callThrough()", () => {
      spyOn(window, "updateResult").and.stub();
      spyOn(Calculator.prototype, "multiply").and.callThrough(); // Calls the real method
      calculate("6*3");
      expect(window.updateResult).toHaveBeenCalled();
      expect(Calculator.prototype.multiply).toHaveBeenCalled();
      expect(Calculator.prototype.multiply).toHaveBeenCalledWith(3);
      expect(window.updateResult).toHaveBeenCalledWith(18);
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it("should call updateResult() - using callFake()", () => {
      spyOn(window, "updateResult").and.stub();
      spyOn(Calculator.prototype, "multiply").and.callFake(() => {
        return 36;
      }); // Calls the fake method
      calculate("6*6");
      expect(window.updateResult).toHaveBeenCalled();
      expect(Calculator.prototype.multiply).toHaveBeenCalled();
      expect(Calculator.prototype.multiply).toHaveBeenCalledWith(6);
      expect(window.updateResult).toHaveBeenCalledWith(36);
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });
  });
  describe("updateResult()", () => {
    let element;
    beforeAll(() => {
      element = document.createElement("div");
      element.setAttribute("id", "result");
      document.body.appendChild(element);
    });

    afterAll(() => {
      const element = document.getElementById("result");
      document.body.removeChild(element);
    });

    it("add result to DOM element", () => {
      updateResult("5");
      expect(element.innerText).toBe("5");
    });
  });
});
