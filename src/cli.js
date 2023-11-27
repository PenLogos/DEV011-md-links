#!/usr/bin/env node

const { mdLinks } = require('./index');

const link = process.argv[2];
const validate = process.argv.includes('--validate');
const stats = process.argv.includes('--stats');
console.log(link, validate, stats);

mdLinks(link, validate, stats)
.then(res => console.log(res))
.catch(error => console.log(error));
