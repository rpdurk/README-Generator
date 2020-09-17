const axios = require('axios');

const api = async function getGitHubData() {
  // const queryUrl = `https://api.github.com/users/${userName}`;
  // await, I don't need a then, because then is a promise
  const { data } = await axios.get(`https://api.github.com/users/${username}`)
    // .then(function (response) {
      console.log("inside api", data);
    // });
  return data;
};

// need to deconstruct the variable for the API call
module.exports = { api };