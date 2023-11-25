#!/usr/bin/env node
const { mdLinks } = require('./index');

const validate = process.argv.includes('--validate')
const link = process.argv[2]
console.log(validate, link);

mdLinks(link, validate)
.then(res => console.log(res))
.catch(error => console.log(error))