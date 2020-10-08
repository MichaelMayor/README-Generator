// function to generate markdown for README
function generateMarkdown(userResponses, githubInfo) {


  // Generate Table of Contents
  let draftToC = `
### Table of Contents

  * [Description](#description)`;

  if (userResponses.installation !== '') {
    draftToC += `
  * [Installation](#installation)`
  };

  if (userResponses.usage !== '') {
    draftToC += `
  * [Usage](#usage)`
  };

  if (userResponses.contributing !== '') {
    draftToC += `
  * [Contributing](#contributing)`
  };

  if (userResponses.tests !== '') {
    draftToC += `
  * [Tests](#tests)`
  };

  draftToC += `
  * [License](#license)`

  // Generate markdown the README Title, License Badge, and Repo badge
  let licenseURL = userResponses.license.split(' ').join('_')
  let draftReadme =
    `# ${userResponses.title}

![GitHub Last Commit](https://img.shields.io/github/last-commit/${githubInfo.login}/${userResponses.repo})![License: ${userResponses.license}](https://img.shields.io/badge/License-${licenseURL}-blue.svg)`

  // Add Table of Contents to markdown
  draftReadme += draftToC;

  draftReadme +=
    `
 
## Description 
 
 
${userResponses.description}`

  // Installation section
  if (userResponses.installation !== '') {

    draftReadme +=
      `
      
## Installation
      
${userResponses.installation}`
  };


  // Usage section
  if (userResponses.usage !== '') {

    draftReadme +=

      `
      
## Usage 
      
${userResponses.usage}`
  };


  // Contributing section
  if (userResponses.contributing !== '') {
    `
      
## Contributing
      
${userResponses.contributing}`
  };


  // Tests section
  if (userResponses.tests !== '') {

    draftReadme +=
      `
      
## Tests
      
${userResponses.tests}`
  };


  // License section
  draftReadme +=
    `
      
## License
      
${userResponses.license}
`;

  // Questions section
  draftReadme +=
    `
---
    
## Questions?
   
GitHub: [@${githubInfo.login}](${githubInfo.url})
`;

  // Add GitHub email to Questions section
  if (githubInfo.email !== null) {

    draftReadme +=
      `
Email: ${githubInfo.email}
`
  };


  // Return markdown
  return draftReadme;

}

module.exports = generateMarkdown;