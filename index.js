// packages: fs, inquirer, and generateMarkdown function from utils.
// REMEMBER TO ACTUALLY INSTALL INQUIRER BEFORE USING THIS APP!
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username (Required)",
        validate: input => {
            if (input) return true;
            else return console.log("Please enter your username!"); // falsy, so this works!
        }
    },
    {
        type: "input",
        name: "title",
        message: "Enter the title of your README (Required)",
        validate: input => {
            if (input) return true;
            else return console.log("Please enter the title!"); // falsy, so this works!
        }
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
    inquirer.prompt(questions)
    .then(data => writeToFile("./dist/README.md", data))
    .catch(err => console.log(err));
};

// initialize app
init();
