const pathModule = require('path');
const fs = require('fs');
const fsPromise = require('fs/promises');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt()

const absolutePath = (path) => pathModule.resolve(path);
const fileExistence = (path) => fs.existsSync(path);
const pathExtension = (path) => pathModule.extname(path);
const fileReading = (path) => fsPromise.readFile(path, { encoding: 'utf8' })
  .then(res => {
    return res})
  .catch(error => console.log(error))
const fileParsing = (content) => md.parse(content);

module.exports = {
  absolutePath,
  fileExistence,
  pathExtension,
  fileReading,
  fileParsing
};
