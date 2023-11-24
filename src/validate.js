const codeStatus = (href) => {
  return new Promise((resolve, reject) => {
    fetch(href)
      .then((res) => {
        if (res.ok) {
          return resolve(res.status);
        } else {
          return Promise.reject(res.status);
        }
      })
      .catch((error) => {
        reject(error)
      });
  });
};

module.exports = {
  codeStatus,
};
