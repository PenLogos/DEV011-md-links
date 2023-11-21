// const { error } = require('console');
const { absolutePath } = require('./functions')


function mdLinks(path) {
  return new Promise((resolve, reject) => {
    const isAbsolutePath = absolutePath(path);
    
  resolve(isAbsolutePath);
  reject('no hay links')
});
}
module.exports = {
  mdLinks
};
