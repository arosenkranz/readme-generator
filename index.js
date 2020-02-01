const axios = require('axios');

axios.get('https://omdbapi.com/?t=batman&apikey=trilogy')
  .then(res => console.log(res))
  .catch(err => console.log(err))