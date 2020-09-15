function generateMarkdown(data) {
  return `
<div align="center">

# ${data.title}

URL of the deployed application: ${data.}

URL of the GitHub repository: ${data.}

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

${data.}

## Installation

${data.}

## View

To view the website, you can click [here](${data.}).

## Usage and Key Features

${data.}

## License 

${data.}
`;
}

module.exports = generateMarkdown;
