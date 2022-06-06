const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('../lib/Manager');

class Prompt {
    constructor() {
        this.manager;
    }

    initializePrompt() {
        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: "What is the team manager's name?"
            })
            .then (({ name }) => {
                this.manager = new Manager(name);

                console.log(this.manager.getName());
            })
            // .prompt({
            //     type: 'input',
            //     name: 'id',
            //     message: "What is the team manager's employee ID?"
            // })
            // .then (({ id }) => {
            //     this.manager = new Manager(id);

            //     console.log(this.Manager.getID());
            // })
    }
}

module.exports = Prompt;