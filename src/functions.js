const fs = require('fs');
const pathModule = require('path');

const absolutePath = (path) => pathModule.resolve(path);
const fileExistence = (path) => fs.existsSync(path);
const pathExtension = (path) => pathModule.extname(path);

module.exports = {
    absolutePath,
    fileExistence,
    pathExtension
  };