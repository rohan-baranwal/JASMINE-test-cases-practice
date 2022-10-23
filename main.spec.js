describe("main.js", () => {
  describe("calculate()", () => {
    it("should validate expression", () => {});
    it("should call add", () => {});
    it("should call subract", () => {});
    it("should call multiply", () => {});
    it("should call divide", () => {});
    it("should validate operation", () => {});
    it("should call updateResult()", () => {});
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
