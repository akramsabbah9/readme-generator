// returns a license badge based on argument. If there is no license, return empty string
const renderLicenseBadge = license => {
    switch (license) {
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "Apache 2.0":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "GPL 3.0":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case "BSD 3":
            return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        default:
            return "";
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {};

// return the license section of README. If there is no license, return empty string
const renderLicenseSection = (license) => {
    if (license === "None") return ""
    else return `## License
This project is licensed under the ${license} License — see ${renderLicenseLink} for details.
`;
};

// generate markdown for README
const generateMarkdown = data => {
    return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description

${data.description}


## Table of Contents


## Installation

${data.installation}


## Usage

${data.usage}


${renderLicenseSection(data.license)}


## Contributing

${data.contributing}


## Tests

${data.tests}


## Questions

If you have any questions about this repo, open an issue or pull request, or contact me at ${data.email}. You can find more of my work at https://github.com/${data.username}.
`;
};

module.exports = generateMarkdown;
