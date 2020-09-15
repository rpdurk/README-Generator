const axios = require('axios');
const userName = "rpdurk";

const queryUrl = `https://api.github.com/users/${userName}`;


getGitHubData();

async function getGitHubData(userName) {
  const queryUrl = `https://api.github.com/users/${userName}`;
  try {
    const { data } = await axios.get(
      queryUrl
    );

    console.log(data);
  
  } catch (err) {
    console.log(err);
  }
}

// const axios = require('axios');
// const api = {
//   getUser(username) {
//     axios.get(queryUrl).
//       then(function (github) {
//         console.log(github.data)
//         const url = github.data.avatar_url;
//         const email = github.data.email;
//       })
//     return
//     url
//     email;
//   }
// };


const api = {
  getUser(userName) {
    const queryUrl = `https://api.github.com/users/${userName}`;
    axios.get(queryUrl)
      .then(function ({ data }) {
        console.log(data);
      });
  }
};

// module.exports = api;


// const axios = require('axios');
// const api = {
//   getUser(username) {
//   }
// };