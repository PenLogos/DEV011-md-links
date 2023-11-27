#!/usr/bin/env node

const { mdLinks } = require('./index');

mdLinks('Archivos-de-prueba/Plantilla-README.md', true, true)
.then(res => console.log(res, 'Archivo con links'))
.catch(error => console.log(error, 'Archivo con links'));

mdLinks('Archivos-de-prueba/Prueba-simple.text', false, true)
.then(res => console.log(res, 'Archivo sin links'))
.catch(error => console.log(error, 'Archivo sin links'))
