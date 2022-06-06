const Employee = require('../lib/Employee.js')

test("creates an employee object", () => {
    const employee = new Employee('Danny', 'daniel.younghwan.lee@gmail.com', 'Employee');

    expect(employee.name).toBe('Danny');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('daniel.younghwan.lee@gmail.com')
    expect(employee.role).toBe('Employee');
});

test("gets employee's name", () => {
    const employee = new Employee('Danny', 'daniel.younghwan.lee@gmail.com', 'Employee');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("gets employee's ID", () => {
    const employee = new Employee('Danny', 'daniel.younghwan.lee@gmail.com', 'Employee');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});


test("gets employee's email", () => {
    const employee = new Employee('Danny', 'daniel.younghwan.lee@gmail.com', 'Employee');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("gets employee's role", () => {
    const employee = new Employee('Danny', 'daniel.younghwan.lee@gmail.com', 'Employee');

    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role.toString()));
});