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

// return the license link. If there is no license, return empty string
const renderLicenseLink = license => {
    switch (license) {
        case "MIT":
            return "[MIT License](https://opensource.org/licenses/MIT)";
        case "Apache 2.0":
            return "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
        case "GPL 3.0":
            return "[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)";
        case "BSD 3":
            return "[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)";
        default:
            return "";
    }
};

// return the license section of README. If there is no license, return empty string
const renderLicenseSection = license => {
    if (license === "None") return "";

    return `
## License

This project is covered under the ${license} License — see the ${renderLicenseLink(license)} for details.

`;
};

// generate markdown for README
const generateMarkdown = data => {
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)${(data.license === "None") ? "" : "\n* [License](#license)"}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


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
