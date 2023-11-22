// const { error } = require('console');
const { absolutePath } = require("./functions");
const { fileExistence } = require("./functions");
const { pathExtension } = require("./functions");
const { fileReading } = require("./functions");


const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    const fileExists = fileExistence(path);
    const isAbsolutePath = absolutePath(path);
    const fileExtension = pathExtension(path);
    const aloudExtensions = (fileExtension === ('.md'||'.mkd'||'.mdwn'||'.mdown'||'.mdtxt'||'.mdtext'||'.markdown'||'.text'));
    const fileRead = fileReading(path);
    if (fileExists && aloudExtensions) {
      resolve(fileRead);
    }
    else if(fileExists === false && aloudExtensions) {
      reject(new Error('La ruta no existe'))
    }else {
      reject(new Error('No es un archivo markdown'))
    };
  });
};

module.exports = {
  mdLinks
};