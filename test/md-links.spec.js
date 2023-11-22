const { mdLinks } = require('../src/index');
const { absolutePath } = require('../src/functions');
const { fileExistence } = require('../src/functions');

describe("mdLinks", () => {
  it("debería retornar una promesa", () => {
    expect(typeof mdLinks).toBe(typeof Promise);
  });
  it("debería retornar una ruta absoluta para un llamado con ruta relativa", () => {
    const isAbsolutePath = absolutePath('README.md')
    expect(isAbsolutePath).toBe('C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\README.md');
  });
  it("debería retornar un error si la ruta no existe", async () => {
    return expect(mdLinks('inválido')).rejects.toThrow('archivo no existe');
  });
});
