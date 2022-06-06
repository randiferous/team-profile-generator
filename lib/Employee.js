class Employee {
    constructor(name, email, role) {
        this.name = name;
        this.id = Math.floor(Math.random() * 1000);
        this.email = email;
        this.role = role;
    }

    getRole() {
        return this.role;
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