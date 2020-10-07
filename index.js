// Packages
const inquirer = require('inquirer');
const axios = require('axios')
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer questions array
const questions = [{
        type: 'input',
        message: "What is your GitHub username? (required)",
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A GitHub username is required.");
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "What is the name of the GitHub repo for the project? (required)",
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A GitHub repo is required for a badge.");
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "What is the title of your project? (Required)",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A project title is required.");
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.(Required)",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A project description is required.");
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "Describe the steps to install your project. (Optional)",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use. (Optional)",
        name: 'usage'
    },
    {
        type: 'input',
        message: "How can other developerscontribute to your project? (Optional)",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Provide any tests for your application and examples on how to run them. (Optional)",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project. (Required)",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

inquirer
    .prompt([
        /* Pass your questions in here */
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();