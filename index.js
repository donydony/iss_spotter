// index.js
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, times) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  for (let t of times) {
    const time = new Date(0);
    time.setUTCSeconds(t.risetime);
    const duration = t.duration;
    console.log(`Next pass at ${time} for ${duration} seconds!`);
  }
});