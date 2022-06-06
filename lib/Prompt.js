const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('../lib/Manager');

class Prompt {
    constructor() {
        this.manager;
    }

    initializePrompt() {
        inquirer
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
            .then((answers) =>
            console.log(answers))
    }
}

module.exports = Prompt;