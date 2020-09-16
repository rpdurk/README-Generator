const generateReadMe = function generateMarkdown(response) {
  return `
<div align="center">

# ${response.avatar_url}

URL of the deployed application:

URL of the GitHub repository: 

</div>

## Table of Contents 

* [Description](#description)
* [Installation](#installation)
* [View](#view)
* [Usage](#usage)
* [Built With](#built-with)
* [Credits](#credits)
* [License](#license)

## Description



## Installation



## View

To view the website, you can click [here]().

## Usage and Key Features



## License 


`;
}

module.exports = { generateReadMe };
