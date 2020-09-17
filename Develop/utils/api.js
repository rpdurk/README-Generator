// require axios
const axios = require('axios');
// create a const for the apiKey to avoid it being shared
const apiKey = process.env.apiKey;

const api = async function getGitHubData() {
  // need a header based on github API docs
  const config = {
    headers: {'Authorization': 'token '+apiKey}
  }
  // pass in the request url and the api authentication
  const { data } = await axios.get(`https://api.github.com/users/${username}`, config)
      // console.log("inside api", data);
  return data;
};

// need to deconstruct the variable for the API call
module.exports = { api };