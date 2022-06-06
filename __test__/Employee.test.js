const Employee = require('../lib/Employee.js')

test("creates an employee object", () => {
    const employee = new Employee('Danny', 'daniel.younghwan.lee@gmail.com');

    expect(employee.name).toBe('Danny');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('daniel.younghwan.lee@gmail.com')
});