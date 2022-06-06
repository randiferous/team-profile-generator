const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee');

class Prompt {
    constructor() {
        this.employee;
    }

    initializePrompt() {
        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: "What is the team manager's name?"
            })
            .then(({ name }) => {
                this.employee = new Employee(name);

                console.log(this.employee.getName());
            });
    }
}

module.exports = Prompt;