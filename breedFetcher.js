const request = require('request');
// const args = process.argv.slice(2);

const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (err, response, body) => {
    if (err) {
      throw new Error("woops something is wrong with the request");
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      err = "Breed not found";
      callback(err);
    } else {
      callback(err, data[0]['description']);
    }
  });
};

module.exports = { fetchBreedDescription };