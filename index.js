// TODO: Include packages needed for this application
const inquier = require('inquirer');
const fs = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    { //This is the Question to tell the user the project title
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    { //This is the Question to tell the user of the description of the project
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?'
    },
    { //This is the Question to tell the user installation instructions
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    { //This is the Question to tell the user of the project usage
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?'
    },
    { //This is the Question to tell the user the licenses for the project
        type: 'list',
        name: 'license',
        message: 'What are the licences of this project?',
        choices: ['Apache', 'Mit', 'None'],
    },
    { //This is the Question to tell the user of the contributors
        type: 'input',
        name: 'contributing',
        message: 'What are the contributors of this project?'
    },
    { //This is the Question to tell the user if different tests that can be ran
        type: 'input',
        name: 'tests',
        message: 'What are some tests that can be ran for this project?'
    },
    { //This is the Question to tell the user what questions were asked 
        type: 'list',
        name: 'questionList',
        message: 'Is their a question list used for this project?',
        choices: [ 'QuestionList','None' ]
    },
    { //This is the Question to ask the user for their Github Username
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    { //This is the Question to ask the user for their email address
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data);//this will return the data from the filename
}

// TODO: Create a function to initialize app
function init() {
    inquier.prompt(questions)//it will now show the questions with inquierer
    .then((answers) => writeToFile("README.md", generateMarkdown(answers)));
    //.catch((err) => console.error(err));
    
    //callback funct runs the error and outputs the error object if there is an error
    //const fileName = 'theAnswers.json';
      //  fs.writeFile(fileName, JSON.stringify(answers), (err) =>  
        //err ? console.error(err) : console.log('Success!')
       // )}
    //const readMe = generateMarkdown(answers);   
        //);
}

// Function call to initialize app
init();
