const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email);

        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return `Intern's school is ${this.school}.`;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;