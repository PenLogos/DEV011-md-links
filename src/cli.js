const { mdLinks } = require('./index')
mdLinks('REDME.md')
.then(res => console.log(res))
.catch(error => console.log(error))