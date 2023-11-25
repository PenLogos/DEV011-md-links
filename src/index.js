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
        
        let linksProperties = [];
        let validateLinksProperties= []
        
        parseFile.forEach((token, index) => {
          const paragraphContent = token.content;
          const regex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
          console.log(paragraphContent);
          
          let match;
          while ((match = regex.exec(paragraphContent)) !== null) {
            const text = match[1];
            const href = match[2];
            codeStatus(href)
            .then((data) => validateLinksProperties.push({href, text, file: file, status: data, ok: "ok",}))
            .catch((error) => validateLinksProperties.push({href, text, file: file, status: error, ok: "fail",}));
            if (validate) {
              codeStatus(href)
              .then((data) => linksProperties.push({href, text, file: file, status: data, ok: "ok",}))
              .catch((error) => linksProperties.push({href, text, file: file, status: error, ok: "fail",}));
            } else {
              linksProperties.push({ href, text, file: file });
            }
            
          }
        });
        setTimeout(() => {
          if (stats) {
            const showStats = statsData(validateLinksProperties)
            resolve( {linksProperties, showStats} );
          } else {
            resolve(linksProperties)
          }
        }, 3000);
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
