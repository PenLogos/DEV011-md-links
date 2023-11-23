// const { error } = require('console');
// const fs = require('fs');
// const MarkdownIt = require("markdown-it")();
const { absolutePath } = require("./functions");
const { fileExistence } = require("./functions");
const { pathExtension } = require("./functions");
const { fileReading } = require("./functions");
// const { fileRendered } = require("./functions");
const { fileParsing } = require("./functions");

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    const file = absolutePath(path);
    const fileExists = fileExistence(file);
    const fileExtension = pathExtension(file);
    const allowedExtensions =
      fileExtension ===
      (".md" ||
        ".mkd" ||
        ".mdwn" ||
        ".mdown" ||
        ".mdtxt" ||
        ".mdtext" ||
        ".markdown" ||
        ".text");
    if (fileExists && allowedExtensions) {
      fileReading(file).then((res) => {
        fileRead = res;
        const parseFile = fileParsing(fileRead);
        console.log(parseFile, 'parse');

        let linksProperties = [];

        parseFile.forEach((token, index) => {
          if (token.type === 'inline') {
            const paragraphContent = token.content;
            const regex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
      
            let match;
            while ((match = regex.exec(paragraphContent)) !== null) {
              const text = match[1];
              const href = match[2];
              linksProperties.push({ href, text, file: file });
            }
          }
        });
        resolve(linksProperties);
      });
    } else if (fileExists === false && allowedExtensions) {
      reject(new Error("La ruta no existe"));
    } else {
      reject(new Error("No es un archivo markdown"));
    }
  });
};
module.exports = {
  mdLinks,
};
