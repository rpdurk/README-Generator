// require "inquirer" is called to run the prompt in the command line
const inquirer = require('inquirer');
// require api call
const { api } = require('./utils/api.js');
// require generate markdown from markdown writeFileAsync
const { generateReadMe } = require('./utils/generateMarkdown.js');
// require "fs" needed to write the file
const fs = require('fs');


const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your github username.',
    },
    {
        type: 'list',
        name: 'badges',
        message: 'Please select any badges you would like.',
        choices: ["A", "B", "C", "D"]
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the  project!',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: '',
    },
    {
        type: 'input',
        name: 'installationGuide',
        message: 'Please, describe how you install this product.',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please, describe how you use this product.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'If this app has a license, please describe which.',
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
        // generate readMe
        const writeReadMe = generateReadMe(response);
        writeFileAsync("README.MD", writeReadMe);
        console.log("README successfully generated.")
    } catch (err){
        console.log(err)
    }
};

init();