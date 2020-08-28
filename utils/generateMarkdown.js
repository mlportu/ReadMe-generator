const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

const sampleHtml = '<h1>This will be written to the file!</h1>';

writeFile(sampleHtml)
  .then(successfulResponse => {
    // this will run when we use `resolve()`
    console.log(successfulResponse);
  })
  .catch(errorResponse => {
    // this will run when we use `reject()`
    console.log(errorResponse);
  });

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title

  ## Description
  Description text

  ## Table of Contents
  * Item 1
  * Item 2

  ## Installation
  Installation Guidelines Text

  ## Usage
  Usage Guideline TExt

  ## Credits
  List of credits

  ## License
  Selected Licenses

  ## Contributing 
  Guidance of how to contribute

  ## Tests
  Available Tests 
`;
}

module.exports = generateMarkdown;
