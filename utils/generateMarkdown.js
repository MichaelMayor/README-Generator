// function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {


  // Generate Table of Contents
  let draftToC = `## Table of Contents

  * [Description](#description)`;
  
  if (userResponses.installation !== '') { draftToC += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { draftToC += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { draftToC += `
  * [Tests](#tests)` };

  draftToC += `
  * [License](#license)`

 // Generate markdown the README Title, License Badge, and Repo badge
 let draftReadme = 
 `# ${userResponses.title}

 ![GitHub Last Commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo})![License: ${userResponses.license}](https://img.shields.io/badge/License-${userResponses.license}-blue.svg)`

 // Add Table of Contents to markdown
 draftReadme += draftToC;    

 draftReadme +=
 `
 
 ## Description 
 
 
 ${userResponses.description}`

}

module.exports = generateMarkdown;
