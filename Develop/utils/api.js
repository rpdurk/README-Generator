const axios = require('axios');

const api = async function getGitHubData() {
  // const queryUrl = `https://api.github.com/users/${userName}`;
  const response = await axios.get(`https://api.github.com/users/${username}`)
    .then(function (response) {
      console.log(response);
    });
  return response;
};

// need to deconstruct the variable for the API call
module.exports = { api };