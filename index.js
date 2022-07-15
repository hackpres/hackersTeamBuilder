const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require("inquirer");
const fs = require('fs');
const managerQustions = require('./src/managerQuestions')
const engineerQuestions = require('./src/engineerQuestions');
const internQuestions = require('./src/internQuestions');
const { default: generateTeam } = require('./src/generateTeam');


const teamArr = []

function init() {
    inquirer.prompt(managerQustions).then(results => {
        const manager = new Manager(results.managerName, results.managerID, results.managerEmail, results.officeNum)
        buildTeam(results, manager);
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
                buildTeam(results, engineer);
                addMember();
            })
        } else if(results.desiredAddition === "Add an intern") {
            inquirer.prompt(internQuestions).then(results => {
                const intern = new Intern(results.internName, results.internID, results.internEmail, results.internSchool)
                buildTeam(results, intern);
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
}

function buildTeam(answers, person) {
    teamArr.push(person)
    if(answers.finished === false) {
        addMember()
    } else {

    }
}
init()