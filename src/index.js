// const { error } = require('console');
const { absolutePath } = require("./functions");
const { fileExistence } = require("./functions");

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    const fileExists = fileExistence(path);
    const isAbsolutePath = absolutePath(path);
    if (fileExists) {
      resolve(isAbsolutePath);
    } else {
      reject("no hay links");
    };
  });
};
module.exports = {
  mdLinks
};
