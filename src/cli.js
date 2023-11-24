const { mdLinks } = require('./index')
mdLinks('./Archivos-de-prueba/Prueba-simple.text', true)
.then(res => console.log(res))
.catch(error => console.log(error))