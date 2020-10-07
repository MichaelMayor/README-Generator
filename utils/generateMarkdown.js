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


}

module.exports = generateMarkdown;
