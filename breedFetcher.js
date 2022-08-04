const request = require('request');
const breed = process.argv.slice(2)[0];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length !== 0) {
    console.log(data[0].description);
  } else {
    console.log('Breed not found!');
  }
});