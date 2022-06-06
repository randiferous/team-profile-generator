const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Buddy', 'mybuddy@gmail.com', 'NYU');

    expect(intern.name).toBe('Buddy');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('mybuddy@gmail.com');
    
    expect(intern.school).toBe('NYU');
});