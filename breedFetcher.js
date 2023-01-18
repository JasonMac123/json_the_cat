const request = require('request');
const apiEndPoint = 'https://api.thecatapi.com/v1/breeds/search?q=';


const args = process.argv[2];
const findCatDescription = function(name) {
  request(`${apiEndPoint}${name}`, (error, response, body) => {
    if (error) {
      console.log("Request Failed");
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed cannot be found');
      return;
    }
    console.log(data[0].description);
    return;
  });
};
findCatDescription(args);