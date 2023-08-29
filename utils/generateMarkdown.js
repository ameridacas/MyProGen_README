// TODO: Create a function that returns a license badge based on which license is passed in
//function getlicenseBadge(license) = {
//  const licenses = {

//  }
//const licenseName = "mit";
//const licenseBadge = getlicenseBadge(licenseName);
//console.log(licenseBadge);

//}
function renderQuestionslist(questionList) {
  console.log(questionList);
  if (questionList !== "None" ) {
    return ['What is the project title?',
            'What is the description of the project?',
            'What are the installation instructions?',
            'What is the usage of this project?',
            'What are the licences of this project?',
            'What are the contributors of this project?',
            'What are some tests that can be ran for this project?',
            'What were the questions used for this project?',
            'What is your GitHub username?',
            'What is your email address?' ]
 }else{
  return ``;
 }}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
 // console.log(license);
 if (license !== "None" ) {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
 }else{
  return ``;
 }}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //console.log(license);
  if (license !== "None" ) {
    return `##License 
            ${license}`
  }else{
  return ``;
  }}
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //console.log(license);
  if (license !== "None" ) {
    return `- [License](#License)`
 }else{
  return ``;
 }}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}  

  #Description 
  
  ${data.description}

  ##Table of Contents

  ${renderLicenseSection(data.license)} 
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  #Installation

  ${data.installation}
  
  #Usage

  ${data.usage}
  
  ##Contributing

  ${data.contributing}
  
  ${renderLicenseLink(data.license)}  

  ##Tests

  ${data.tests} 
   
  ##Questions

  ${data.questions}

  https://.github.com/${data.github}

  ${data.email}
`;
}

module.exports = generateMarkdown;
