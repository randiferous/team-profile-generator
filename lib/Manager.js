const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, email) {
        super(name, email);

        this.role = 'Manager';
        this.officeNumber = Math.floor(Math.random() * 100);
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager