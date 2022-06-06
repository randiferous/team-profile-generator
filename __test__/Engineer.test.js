const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Danny', 'daniel.younghwan.lee@gmail.com', 'randiferous');

    expect(engineer.name).toBe('Danny');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('daniel.younghwan.lee@gmail.com');
    
    expect(engineer.github).toBe('randiferous');
});