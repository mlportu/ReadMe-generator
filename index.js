const inquirer = require('inquirer');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is your project's title. (Required)",
            validate: projName => {
                if(projName) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: projDesc => {
                if(projDesc){
                    return true;
                } else{
                    console.log('Please enter a project description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'intallation',
            message: 'Enter detailed instructions for how to get the development environment running for your project. (Required)',
            validate: projInstall => {
                if(projInstall){
                    return true;
                } else{
                    console.log('Please enter installation instructions for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter any instructions or examples for use of your project. (Required)',
            validate: projUse => {
                if(projUse){
                    return true;
                } else{
                    console.log('Please enter useage instructions or examples for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter any guidelines for how you would like individuals to contribute to your project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter any tests for your project'
        },
        {
            type: 'list',
            name: 'lisence',
            message: 'Select a license that applies to your project',
            choices: ['Apache', 'ISC', 'MIT', 'GNU', 'None']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter your GitHub username. (Required)',
            validate: ghName => {
                if (ghName){
                    return true;
                }else {
                    console.log('Please enter the GitHub Link for your project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email. (Required)',
            validate: email => {
                if (email){
                    return true;
                }else {
                    console.log('Please enter the GitHub Link for your project')
                    return false;
                }
            }
        }
    ]);
};

questions().then(answers => console.log(answers))

// function to write README file
function writeToFile(fileName, data) {


}

// function to initialize program
function init() {

}

// function call to initialize program
init();
