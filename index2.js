const { nextISSTimesForMyLocation } = require('./iss_promised');
const printPassTimes = function(times) {
  for (let t of times) {
    const time = new Date(0);
    time.setUTCSeconds(t.risetime);
    const duration = t.duration;
    console.log(`Next pass at ${time} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });