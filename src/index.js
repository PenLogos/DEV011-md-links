const { absolutePath } = require("./functions");
const { fileExistence } = require("./functions");
const { pathExtension } = require("./functions");
const { fileReading } = require("./functions");
const { fileParsing } = require("./functions");
const { codeStatus } = require("./validate");

const mdLinks = (path, validate) => {
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
        
        parseFile.forEach((token, index) => {
          if (token.type === "inline") {
            const paragraphContent = token.content;
            const regex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;

            let match;
            while ((match = regex.exec(paragraphContent)) !== null) {
              const text = match[1];
              const href = match[2];

              if (validate) {
                codeStatus(href)
                  .then((data) => linksProperties.push({href, text, file: file, status: data, ok: "ok",}))
                  .catch((error) => linksProperties.push({href, text, file: file, status: error, ok: "fail",}));
              } else {
                linksProperties.push({ href, text, file: file });
              }
            }
          }
        });
        setTimeout(() => {
          resolve(linksProperties);
        }, 4000);
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
