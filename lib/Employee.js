class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole() {
        return "Employee";
    }

    getName() {
        return `${this.role}'s name is ${this.name}.`;
    }

    getId() {
        return `${this.role}'s ID is ${this.id}.`;
    }

    getEmail() {
        return `${this.role}'s email is ${this.email}.`;
    }
}

module.exports = Employee;