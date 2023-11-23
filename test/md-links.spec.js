const { mdLinks } = require('../src/index');
const { absolutePath } = require('../src/functions');
const { fileReading } = require('../src/functions');
// const { fileExistence } = require('../src/functions');
// const { pathExtension } = require('../src/functions');

describe("mdLinks", () => {
  it('debería retornar una promesa', () => {
    expect(typeof mdLinks).toBe(typeof Promise);
  });
  it('debería retornar una ruta absoluta para un llamado con ruta relativa', () => {
    const file = absolutePath('README-prueba.md')
    expect(file).toBe('C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\README-prueba.md');
  });
  it('debería retornar el texto de un archivo markdown si cumple las validaciones', () => {
    const fileRead = fileReading('Prueba-simple.md')
    expect(fileRead).resolves.toBe('Hola, sí funcionó');
  });
  it('debería retornar un error si la ruta no existe', () => {
    return expect(mdLinks('inválido.md')).rejects.toThrow('La ruta no existe');
  });
  it('debería retornar un error si no es un archivo markdown', () => {
    return expect(mdLinks('function.js')).rejects.toThrow('No es un archivo markdown');
  });
});
