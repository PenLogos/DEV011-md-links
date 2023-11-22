const { mdLinks } = require('./index')
mdLinks('README')
.then(res => console.log(res))
.catch(error => console.log(error))