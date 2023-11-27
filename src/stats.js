const statsData = (array) => {
  const totalLinks = array.length;
  let okLinks = 0;
  let failLinks = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].ok === "ok") {
      okLinks++;
    } else {
        failLinks++
    }
  }
  return { TotalLinks: totalLinks, OkLinks: okLinks, FailLinks: failLinks };
};

module.exports = {
  statsData
};
