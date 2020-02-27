const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
  {
    type: "input",  
    message: "Enter your GitHub username:",
    name: "username"
  },
  {
    type: "input",  
    message: "Enter your GitHub email:",
    name: "email"
  },  
  {
    type: "input",
    message: "Project title",
    name: "project_title"
  },
  {
    type: "input",
    message: "Description",
    name: "description"
  },
  {
    type: "input",
    message: "General Info",
    name: "generalInfo"
  }, 
  {
    type: "input",
    message: "Installation",
    name: "installation"
  },
  {
    type: "input",
    message: "License",
    name: "license"
  },       
  {
    type: "input",
    message: "Contributing",
    name: "contributing"
  },
  {
    type: "input",
    message: "Tests",
    name: "tests"
  } 
];

async function init() {
  try {
  const answers = await inquirer.prompt(questions);
  var avatarIcon = await api.getUser(answers.username);
  answers.profileImage = avatarIcon;
  let text = await generateMarkdown(answers);
  await writeFileAsync("../Develop/generated-readme/README.md", text);
  }
  catch (err) {
    console.log(err);
  }  
}

init();
