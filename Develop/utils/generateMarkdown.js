const generateReadMe = function generateMarkdown(userAnswers, response) {
  // console.log("inside generate markdown",response);
  return `
<div align="center">

# ${userAnswers.title}

</div>

## Table of Contents 

* [Description](#description)
* [Installation](#installation)
* [View](#view)
* [Usage](#usage)
* [Contributors](#Contributors)
* [License](#license)
* [Tests](#Tests)
* [Questions](#Questions)

## Description

${userAnswers.description}

## Installation

${userAnswers.installation}

## View

To view the website, you can click [here](${userAnswers.url}).

## Usage

${userAnswers.usage}

## Credits 

${userAnswers.contributors}

## License 

![badge](https://img.shields.io/badge/license-${userAnswers.license}-brightred)<br />

## Tests 

## Questions

To contact the author, please email:
${response.email}
![Profile Picture](${response.avatar_url})

`;
}

module.exports = { generateReadMe };
