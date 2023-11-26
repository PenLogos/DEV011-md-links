const codeStatus = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return resolve(res.status);
        } else {
          return reject(res.status);
        }
      })
      .catch((error) => {
        reject(error)
      });
  });
};

module.exports = {
  codeStatus
};
