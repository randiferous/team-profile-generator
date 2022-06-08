const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Danny', 20, 'daniel.younghwan.lee@gmail.com', 'randiferous');

    expect(engineer.name).toBe('Danny');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('daniel.younghwan.lee@gmail.com');
    
    expect(engineer.github).toBe('randiferous');
});

test("gets engineer's github", () => {
    const engineer = new Engineer('Danny', 20, 'daniel.younghwan.lee@gmail.com', 'randiferous');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});