const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv.slice(2);

fetchBreedDescription(args[0], (err, desc) => {
  if (err) {
    console.log('Error fetch details:', err);
  } else {
    console.log(desc);
  }
});
