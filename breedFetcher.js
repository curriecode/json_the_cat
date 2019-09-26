const request = require('request');
const args = process.argv.slice(2);

// request('https://api.thecatapi.com/v1/breeds/search?q=' + args[0], (err, response, body) => {
//   if (err) {
//     throw new Error("woops something is wrong with the request");
//   }
//   const data = JSON.parse(body);
//   if (data.length === 0) {
//     console.log("Sorry that cat breed is not available in our system, please try again :) ");
//     return;
//   }
//   console.log(data[0].description);
// });

const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (err, response, body) => {
    if (err) {
      throw new Error("woops something is wrong with the request");
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      err = "Breed not found";
      callback(err);
      // return;
    } else {
      callback(err, data[0]['description']);
    }
  });
};
// console.log(fetchBreedDescription());

module.exports = fetchBreedDescription;