const { mdLinks } = require('../src/index');
const { absolutePath } = require('../src/functions');
const { fileReading } = require('../src/functions');

describe("mdLinks", () => {
  it('debería retornar una promesa', () => {
    expect(typeof mdLinks).toBe(typeof Promise);
  });
  it('debería retornar una ruta absoluta para un llamado con ruta relativa', () => {
    const file = absolutePath('./Archivos-de-prueba/Prueba-con-links.md')
    expect(file).toBe('C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\Archivos-de-prueba\\Prueba-con-links.md');
  });
  it('debería retornar un array con tres objetos y tres propiedades para una rchivos markdown con tres enlaces', () => {
    return expect(mdLinks('./Archivos-de-prueba/Plantilla-README.md')).resolves.toStrictEqual([{"file": "C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\Archivos-de-prueba\\Plantilla-README.md", "href": "https://github.com", "text": "GitHub"}, {"file": "C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\Archivos-de-prueba\\Plantilla-README.md", "href": "https://gist.github.com/recurs1v0/0b396678831df73c9cd4ac9e8566e50f", "text": "LINK - ejemplos.md"}, {"file": "C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\Archivos-de-prueba\\Plantilla-README.md", "href": "https://github.com/EPPR/", "text": "GitHub"}]);
  });
  it('debería retornar el texto de un archivo markdown si cumple las validaciones', () => {
    const fileRead = fileReading('./Archivos-de-prueba/Prueba-simple.md')
    expect(fileRead).resolves.toBe('Hola, sí funcionó');
  });
  it('debería retornar un error si la ruta no existe', () => {
    return expect(mdLinks('inválido.md')).rejects.toThrow('La ruta no existe');
  });
  it('debería retornar un error si no es un archivo markdown', () => {
    return expect(mdLinks('src/function.js')).rejects.toThrow('No es un archivo markdown');
  });
});
