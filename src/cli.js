const { mdLinks } = require('./index')
mdLinks('Prueba.md')
.then(res => console.log(res))
.catch(error => console.log(error))