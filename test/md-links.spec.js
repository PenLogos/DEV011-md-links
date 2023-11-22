const { absolutePath } = require('../src/functions');
const { mdLinks } = require('../src/index');

describe("mdLinks", () => {
  it("debería retornar una promesa", () => {
    expect(typeof mdLinks).toBe(typeof Promise);
  });
  it("debería retornar una ruta absoluta para un llamado con ruta relativa", () => {
    const isAbsolutePath = absolutePath('README.md')
    expect(isAbsolutePath).toBe('C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\README.md');
  });
});
