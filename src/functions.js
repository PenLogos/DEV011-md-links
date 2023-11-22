const fsPromise = require('fs/promises')
const fs = require('fs');
const pathModule = require('path');

const absolutePath = (path) => pathModule.resolve(path);
const fileExistence = (path) => fs.existsSync(path);
const pathExtension = (path) => pathModule.extname(path);
const fileReading = (path) => fsPromise.readFile(path, { encoding: 'utf8' });

module.exports = {
    absolutePath,
    fileExistence,
    pathExtension,
    fileReading
  };