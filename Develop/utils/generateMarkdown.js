async function generateMarkdown(data) {
  return `
# ${data.project_title}
${data.description}
 
## Table of Contents
* [General info](#general-info)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## General info
${data.generalInfo}

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
![Screenshot](/Develop/images/usage-image.png)

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
* GitHub profile picture:
![Image](${data.profileImage})
* GitHub email: ${data.email}
`;
}



module.exports = generateMarkdown;

