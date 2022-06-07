const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = require('./src/page-template')
const Manager = require('./lib/Manager');

const employeeResponse = [];

const promptManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the team manager's employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the team manager's email address?"
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the team manager's office number?"
            }
        ])
        .then(managerResponse => {
        const manager = new Manager(managerResponse.name, managerResponse.id, managerResponse.email, managerResponse.officeNumber);
        employeeResponse.push(manager);
        return employeeResponse;
    })
}

const writeFile = response => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', response, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

promptManager()
    .then(employeeResponse => {
        return generatePage(employeeResponse);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });