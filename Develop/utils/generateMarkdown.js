const generateReadMe = function generateMarkdown(userAnswers, response) {
  console.log(response);
  return `
<div align="center">

# ${userAnswers.title}

</div>

## Table of Contents 

* [Description](#description)
* [Installation](#installation)
* [View](#view)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Description

${userAnswers.description}

## Installation

${userAnswers.installation}

## View

To view the website, you can click [here](${userAnswers.url}).

## Usage

${userAnswers.usage}

## Credits 

${userAnswers.credits}

To contact the author, please email:

## License 

${userAnswers.license}

`;
}

module.exports = { generateReadMe };
