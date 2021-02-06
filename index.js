// packages: fs, inquirer, and generateMarkdown function from utils.
// REMEMBER TO ACTUALLY INSTALL INQUIRER BEFORE USING THIS APP!
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user input
const testData = {title: "Test", description: "A test README for this program.", 
installation: "Install using ```npm install```. Go nuts!", usage: "I don't know. It's a test application.",
license: "GPL 3.0", contributing: "", tests: "none", username: "akramsabbah9", email: "testemail@test.com"
};

const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project. (Required)",
        validate: input => (input) ? true : console.log("Please enter the title!")
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project. (Required)",
        validate: input => (input) ? true : console.log("Please enter a description!")
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions for your project. (Required)",
        validate: input => (input) ? true : console.log("Please enter installation instructions!")
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information for your project. (Required)",
        validate: input => (input) ? true : console.log("Please enter usage information!")
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project.",
        choices: ["None", "MIT", "Apache 2.0", "GPL 3.0", "BSD 3"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines for your project. (Required)",
        validate: input => (input) ? true : console.log("Please enter contribution guidelines!")
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions for your project. (Required)",
        validate: input => (input) ? true : console.log("Please enter test instructions!")
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username. (Required)",
        validate: input => (input) ? true : console.log("Please enter your username!")
    },
    {
        type: "input",
        name: "email",
        message: "Enter your GitHub email address. (Required)",
        validate: input => (input) ? true : console.log("Please enter your email!")
    },
];

// generate markdown from the data and write it to README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        // make a readme string from the data
        const readme = generateMarkdown(data);
        
        fs.writeFile(fileName, readme, err => {
            // if there's an error writing the file, reject the Promise.
            if (err) return reject(err);

            //otherwise, resolve as normal.
            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

// initialize app: prompt user for README content, then write to file.
const init = () => {
    // inquirer.prompt(questions)
    // .then(data => writeToFile("./dist/README.md", data))
    // .catch(err => console.log(err));
    writeToFile("./dist/README.md", testData).catch(err => console.log(err));
};

// initialize app
init();
