const Employee = require('../lib/Employee.js')

test("creates an employee object", () => {
    const employee = new Employee('Danny', 20, 'daniel.younghwan.lee@gmail.com');

    expect(employee.name).toBe('Danny');
    expect(employee.id).toEqual(20);
    expect(employee.email).toBe('daniel.younghwan.lee@gmail.com')
});

test("gets employee's name", () => {
    const employee = new Employee('Danny', 20, 'daniel.younghwan.lee@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("gets employee's ID", () => {
    const employee = new Employee('Danny', 20, 'daniel.younghwan.lee@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});


test("gets employee's email", () => {
    const employee = new Employee('Danny', 20, 'daniel.younghwan.lee@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("gets employee's role", () => {
    const employee = new Employee('Danny', 20, 'daniel.younghwan.lee@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});