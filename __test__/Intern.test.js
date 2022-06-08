const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Buddy', 50, 'mybuddy@gmail.com', 'NYU');

    expect(intern.name).toBe('Buddy');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('mybuddy@gmail.com');

    expect(intern.school).toBe('NYU');
});

test("gets intern's school", () => {
    const intern = new Intern('Buddy', 10, 'mybuddy@gmail.com', 'NYU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});