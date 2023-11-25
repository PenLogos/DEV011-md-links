const { absolutePath } = require("./functions");
const { fileExistence } = require("./functions");
const { pathExtension } = require("./functions");
const { fileReading } = require("./functions");
const { fileParsing } = require("./functions");
const { codeStatus } = require("./validate");
const { statsData } = require("./stats");

const mdLinks = (path, validate, stats) => {
  return new Promise((resolve, reject) => {
    const file = absolutePath(path);
    const fileExists = fileExistence(file);
    const fileExtension = pathExtension(file);
    const allowedExtensions = [".md", ".mkd", ".mdwn", ".mdown", ".mdtxt", ".mdtext", ".markdown", ".text"].includes(fileExtension);
    if (fileExists && allowedExtensions) {
      fileReading(file).then((res) => {
        fileRead = res;
        const parseFile = fileParsing(fileRead);
        
        let codeStatusPromises = []
        let linksProperties = [];
        let validateLinksProperties = []
        
        parseFile.forEach((token, index) => {
          const paragraphContent = token.content;
          const regex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
          
          let match;
          while ((match = regex.exec(paragraphContent)) !== null) {
            const text = match[1];
            const href = match[2];
            const linkPromise = codeStatus(href)
            .then((data) => validateLinksProperties.push({href, text, file: file, status: data, ok: "ok",}))
            .catch((error) => validateLinksProperties.push({href, text, file: file, status: error, ok: "fail",}));
            if (validate) {
              const linkPromise2 = codeStatus(href)
              .then((data) => linksProperties.push({href, text, file: file, status: data, ok: "ok",}))
              .catch((error) => linksProperties.push({href, text, file: file, status: error, ok: "fail",}))
              codeStatusPromises.push(linkPromise2);
            } else {
              linksProperties.push({ href, text, file: file });
            }
            codeStatusPromises.push(linkPromise)
          }
        });
        Promise.all(codeStatusPromises).then(() => {
          if (stats) {
            const showStats = statsData(validateLinksProperties);
            resolve({ linksProperties, showStats });
          } else {
            resolve(linksProperties);
          }
        });
      });
    } else if (!fileExists && allowedExtensions) {
      reject(new Error("La ruta no existe"));
    } else {
      reject(new Error("No es un archivo markdown"));
    }
  });
};

module.exports = {
  mdLinks,
};
