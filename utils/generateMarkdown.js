// TODO: Create a function that returns a license badge based on which license is passed in
function getlicenseBadge(license) = {
  const licenses = {

  }
const licenseName = "mit";
const licenseBadge = getlicenseBadge(licenseName);
console.log(licenseBadge);

}
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  #Description 
  ${data.description}

  ##Table of Contents
  
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  #Installation
  ${data.installation}
  
  #Usage
  ${data.usage}
  
  ##Credits
  ${data.credits}

  ##License 
  ${data.license}

  ##Contributing
  ${data.contributing}

  ##Tests
  ${data.tests} 
   
  ##Questions
  ${data.questions}
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
