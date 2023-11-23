const { mdLinks } = require('./index')
mdLinks('Prueba-con-links.md')
.then(res => console.log(res))
.catch(error => console.log(error))