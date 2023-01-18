const request = require('request');
const apiEndPoint = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  request(`${apiEndPoint}${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return data;
    }
    return callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };