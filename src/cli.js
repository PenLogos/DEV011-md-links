const { mdLinks } = require('./index')
mdLinks('.././Archivos-de-prueba/Plantilla-README.md')
.then(res => console.log(res))
.catch(error => console.log(error))