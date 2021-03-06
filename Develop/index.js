// require "inquirer" is called to run the prompt in the command line
const inquirer = require('inquirer');
// require api call
const { api } = require('./utils/api.js');
// require generate markdown from markdown writeFileAsync
const { generateReadMe } = require('./utils/generateMarkdown.js');
// require "fs" needed to write the file
const fs = require('fs');
// require "util" needed to write the file
const util = require('util');
// to shorten writeFile make into a const
const writeFileAsync = util.promisify(fs.writeFile);


const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your github username.',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project title.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the  project!',
    },
    {
        type: 'input',
        name: 'url',
        message: 'Please enter the url to the deployed app.',
    },
    {
        type: 'input',
        name: 'installationGuide',
        message: 'Please, describe how you install this product.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please, describe how you use this product.',
    },
    {
        type: "list",
        name: "license",
        message: "Which license should be added to this project?",
        choices: [
            "Academic",
            "MIT",
            "Mozilla",
            "Open",
        ]
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?',
    }
];

// prompt user the above questions. These will be incorporated into the README
const prompt = function() {
    // must return the answers from the user, to be utilized in the README
    return inquirer.prompt(questions)
};

// initiate user information and README creation.
const init = async function(){
    // attempt to do the following
    try {
        // wait for the prompt function to be ran
        const userAnswers = await prompt()
        // console.log(userAnswers);
        // utilize the prompt function to create a response including the username
        username = userAnswers.username;
        // console.log(username);
        // create a variable to hold the api call function in -this will return the github data
        const response = await api(username);
        // console.log("inside init index in 84", response);
        // generate readMe by passing in prompt()answers and api response
        const writeReadMe = generateReadMe(userAnswers, response);
        await writeFileAsync("README.MD", writeReadMe);
        console.log("README successfully generated.")
    } catch (err){
        console.log(err)
    }
};

init();