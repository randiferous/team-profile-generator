const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, email) {
        super(name, email);

        this.officeNumber = Math.floor(Math.random() * 100);
    }
}

module.exports = Manager