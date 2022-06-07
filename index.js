const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerArray = [];
const employeeArray = [];

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
            managerArray.push(manager);
            return managerArray;
        }).then(managerArray => {
            return generatePage(managerArray);
        })
        .then(pageHTML => {
            return writeFile(pageHTML);
        })
        .catch(err => {
            console.log(err);
        });
}

const promptEmployees = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Would you like to add a new employee?',
                choices: ['Engineer', 'Intern', 'finish'],
                validate: choices => {
                    if (choices === finish) {
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the employee's ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email address?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?",
                when: (response) => response.role === 'Engineer',
            },
            {
                type: 'input',
                name: 'school',
                message: "what school does the intern attend?",
                when: (response) => response.role === 'Intern',
            }
        ])
        .then(employeeResponse => {
            console.log(employeeResponse);
            if (employeeResponse.role === 'Engineer') {
                const engineer = new Engineer(employeeResponse.name, employeeResponse.id, employeeResponse.email, employeeResponse.github);
                employeeArray.push(engineer);
                console.log(employeeArray);
            }
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
    .then(promptEmployees)