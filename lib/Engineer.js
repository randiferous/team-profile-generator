const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, github) {
        super(name, email);

        this.github = github;
        this.role = 'Engineer';
    }

    getGithub() {
        return `Engineer's github is ${this.github}.`;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;