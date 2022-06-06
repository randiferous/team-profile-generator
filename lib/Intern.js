const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email);

        this.school = school;
    }

    getSchool() {
        return `Intern's school is ${this.school}.`;
    }

    getRole() {
        return `Intern`;
    }
}

module.exports = Intern;