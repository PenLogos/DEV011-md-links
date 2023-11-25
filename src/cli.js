#!/usr/bin/env node
const { mdLinks } = require('./index');

const stats = process.argv.includes('--stats')
const validate = process.argv.includes('--validate')
const link = process.argv[2]
console.log(validate, link);

mdLinks(link, validate, stats)
.then(res => console.log(res))
.catch(error => console.log(error))