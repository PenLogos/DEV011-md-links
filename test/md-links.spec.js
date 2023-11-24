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
  it('debería retornar un array con tres objetos y tres propiedades para un archivo markdown con tres enlaces si el segundo parámetro es false', () => {
    return expect(mdLinks('./Archivos-de-prueba/Plantilla-README.md')).resolves.toStrictEqual([{"file": "C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\Archivos-de-prueba\\Plantilla-README.md", "href": "https://github.com", "text": "GitHub"}, {"file": "C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\Archivos-de-prueba\\Plantilla-README.md", "href": "https://gist.github.com/recurs1v0/0b396678831df73c9cd4ac9e8566e50f", "text": "LINK - ejemplos.md"}, {"file": "C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\Archivos-de-prueba\\Plantilla-README.md", "href": "https://github.com/EPPR/", "text": "GitHub"}]);
  });
  it('debería retornar un array con tres objetos y tres propiedades para un archivo markdown con tres enlaces si el segundo parámetro es true', () => {
    return expect(mdLinks('./Archivos-de-prueba/Plantilla-README.md', true)).resolves.toStrictEqual([
      {
        "file": "C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\Archivos-de-prueba\\Plantilla-README.md",
        "href": "https://github.com",
        "ok": "ok",
        "status": 200,
        "text": "GitHub",
      },
      {
        "file": "C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\Archivos-de-prueba\\Plantilla-README.md",
        "href": "https://gist.github.com/recurs1v0/0b396678831df73c9cd4ac9e8566e50f",
        "ok": "ok",
        "status": 200,
        "text": "LINK - ejemplos.md",
      },
      {
        "file": "C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\Archivos-de-prueba\\Plantilla-README.md",
        "href": "https://github.com/EPPR/",
        "ok": "ok",
        "status": 200,
        "text": "GitHub",
      },
    ]);
  });
  it('debería retornar un array con tres objetos y tres propiedades para un archivo markdown con tres enlaces si el segundo parámetro es true, pero la última propiedad debería retornar "fail"', () => {
    return expect(mdLinks('./Archivos-de-prueba/Prueba-con-links.md', true)).resolves.toStrictEqual([
      {
        "file": "C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\Archivos-de-prueba\\Prueba-con-links.md",
        "href": "https://developer.mozilla.org/es/docs/Web/API",
        "ok": "ok",
        "status": 200,
        "text": "ahora uno sobre API",
      },
      {
        "file": "C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\Archivos-de-prueba\\Prueba-con-links.md",
        "href": "https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/tutorial-de-markdown/",
        "ok": "ok",
        "status": 200,
        "text": "primero sobre markdown",
      },
      {
        "file": "C:\\Users\\Federico\\Documents\\Programación\\DEV011-md-links\\Archivos-de-prueba\\Prueba-con-links.md",
        "href": "https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/tutorial-de-markdown/roto/",
        "ok": "fail",
        "status": 404,
        "text": "otro roto",
      },
    ]);
  });
  it('debería retornar el texto de un archivo markdown si cumple las validaciones', () => {
    const fileRead = fileReading('./Archivos-de-prueba/Prueba-simple.text')
    expect(fileRead).resolves.toBe('Hola, sí funcionó');
  });
  it('debería retornar un error si la ruta no existe', () => {
    return expect(mdLinks('inválido.md')).rejects.toThrow('La ruta no existe');
  });
  it('debería retornar un error si no es un archivo markdown', () => {
    return expect(mdLinks('./functions.js')).rejects.toThrow('No es un archivo markdown');
  });
});
