const mdLinks = require("../src/index");

describe("mdLinks", () => {
  it("debería retornar una promesa", () => {
    expect(typeof mdLinks).toBe(typeof Promise);
  });
});
