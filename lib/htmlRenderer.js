const path = require('path');
const fs = require('fs');

const templatesDir = path.resolve(__dirname, './templates');

const buildTeam = employees => {
    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
    );

    return renderTeam(html.join(""));
};

const createManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = fillInTheBlank(template, "name", manager.getName());
    template = fillInTheBlank(template, "id", manager.getID());
    template = fillInTheBlank(template, "email", manager.getEmail());
    template = fillInTheBlank(template, "officeNum", manager.getOfficeNumber());
    return template
};
const createEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = fillInTheBlank(template, "name", engineer.getName());
    template = fillInTheBlank(template, "id", engineer.getID());
    template = fillInTheBlank(template, "email", engineer.getEmail());
    template = fillInTheBlank(template, "ogithub", engineer.getGitHub());
    return template
};
const createIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = fillInTheBlank(template, "name", intern.getName());
    template = fillInTheBlank(template, "id", intern.getID());
    template = fillInTheBlank(template, "email", intern.getEmail());
    template = fillInTheBlank(template, "school", intern.getSchool());
    return template
};

const renderTeam = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return fillInTheBlank(template, "team", html);
};

const fillInTheBlank = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

module.exports = buildTeam;