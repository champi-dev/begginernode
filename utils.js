const sleep = (ms) => {
  const startTime = new Date().getTime();
  while (new Date().getTime() < startTime + ms);
}

exports.sleep = sleep