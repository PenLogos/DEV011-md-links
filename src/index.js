// const { error } = require('console');
const { absolutePath } = require("./functions");
const { fileExistence } = require("./functions");
const { pathExtension } = require("./functions");

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    const fileExists = fileExistence(path);
    const isAbsolutePath = absolutePath(path);
    const fileExtension = pathExtension(path);
    console.log(fileExtension);
    if (fileExists && (fileExtension === ('.md'||'.mkd'||'.mdwn'||'.mdown'||'.mdtxt'||'.mdtext'||'.markdown'||'.text'))) {
      resolve(isAbsolutePath);
    }
    else if(fileExists === false && (fileExtension === ('.md'||'.mkd'||'.mdwn'||'.mdown'||'.mdtxt'||'.mdtext'||'.markdown'||'.text'))) {
      reject(new Error('La ruta no existe'));}
      else {
      reject(new Error('No es un archivo markdown'))
    };
  });
};

module.exports = {
  mdLinks
};