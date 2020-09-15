// require "inquirer" is called to run the prompt in the command line
const inquirer = require('inquirer');
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
    // {
    //     type: 'input',
    //     name: 'tableOfContents',
    //     message: '',
    // },
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
    inquirer.prompt(questions);
};

// initiate user information and README creation.
const init = async function(){
    // attempt to do the following
    try {
        // wait for the prompt function to be ran
        const userAnswers = await prompt()
        // utilize the prompt function to create a response including the username
        username = userAnswers.username;
        console.log(username);
        // generate readMe
        // const generateReadMe = generateReadMe(userAnswers);
        // writeFileAsync("README.MD", generateReadMe);
        // console.log("README successfully generated.")
    } catch (err){
        console.log(err)
    }
};

init();

module.exports = username;