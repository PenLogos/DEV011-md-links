const mdLinks = require('../src');


describe('mdLinks', () => {

  it('debería retornar una promesa', () => {
    expect(mdLinks).toBe(typeof Promise);
  });

});
