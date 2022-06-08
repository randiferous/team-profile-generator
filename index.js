const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
            employeeArray.push(manager);
            promptEmployees(employeeArray)
        })
}

const promptEmployees = (employeeArray) => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Would you like to add a new employee?',
                choices: ['Engineer', 'Intern', 'finish']
            }
        ])
        .then(choiceResponse => {
            let { role } = choiceResponse;
            if (role === 'finish') {

                let pageHTML = generatePage(employeeArray);
                writeFile(pageHTML)
                console.log("Your page is created!")
            } else if (role === 'Engineer') {
                promptEngineer(employeeArray);
            } else if (role === 'Intern') {
                promptIntern(employeeArray);
            }
        });
}

const promptEngineer = (employeeArray) => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email address?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?"
            }
        ])
        .then(engineerResponse => {
            const engineer = new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email, engineerResponse.github);
            employeeArray.push(engineer);
            promptEmployees(employeeArray)
        });
}


const promptIntern = (employeeArray) => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email address?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does the intern attend?"
            }
        ])
        .then(internResponse => {
            const intern = new Intern(internResponse.name, internResponse.id, internResponse.email, internResponse.school);
            employeeArray.push(intern);
            promptEmployees(employeeArray)
        });
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