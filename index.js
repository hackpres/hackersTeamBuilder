const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const managerQustions = require('./src/managerQuestions');
const engineerQuestions = require('./src/engineerQuestions');
const internQuestions = require('./src/internQuestions');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "Team.html");

const buildTeam = require('./lib/htmlRenderer');

const teamArr = [];

function init() {
    inquirer.prompt(managerQustions).then(results => {
        const manager = new Manager(results.managerName, results.managerID, results.managerEmail, results.officeNum)
        teamArr.push(manager);
        addMember();
    })
}

function addMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "desiredAddition",
            massage: "What would you like to do?",
            choices: ["Add an engineer", "Add an intern", "Finish building team"],
            default: "Finish building team"
        }
    ]).then(results => {
        if(results.desiredAddition === "Add an engineer") {
            inquirer.prompt(engineerQuestions).then(results => {
                const engineer = new Engineer(results.engineerName, results.engineerID, results.engineerEmail, results.engineerGitHub)
                teamArr.push(engineer);
                addMember();
            })
        } else if(results.desiredAddition === "Add an intern") {
            inquirer.prompt(internQuestions).then(results => {
                const intern = new Intern(results.internName, results.internID, results.internEmail, results.internSchool)
                teamArr.push(intern);
                addMember();
            })
        } else {
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "finished",
                    message: "Are you sure you've added all team members?",
                    default: true
                },
            ]).then(results => {
                if(results.finished === false) {
                    addMember();
                } else {
                    generateTeam(teamArr)
                }
            })
        }
    })
};

function generateTeam(array) {
    fs.mkdir(OUTPUT_DIR, () => {})

    fs.writeFile(outputPath, buildTeam(array), function (err) {
        if (err) {
            return console.log(err);
        }
    })
};

init()