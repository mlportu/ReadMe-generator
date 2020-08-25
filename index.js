const inquirer = require('inquirer');

// array of questions for user
const questions = [
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is your project's title"
        }
    ])
    .then(answers => console.log(answers))
];

// function to write README file
function writeToFile(fileName, data) {


}

// function to initialize program
function init() {

}

// function call to initialize program
init();
