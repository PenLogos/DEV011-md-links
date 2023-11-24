#!/usr/bin/env node
const { mdLinks } = require('./index');

mdLinks('./Archivos-de-prueba/Prueba-con-links.md', true)
.then(res => console.log(res))
.catch(error => console.log(error))