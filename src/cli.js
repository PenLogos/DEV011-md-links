const { mdLinks } = require('./index')
mdLinks('README.md')
.then(res => console.log(res))
.catch(error => console.log(error))