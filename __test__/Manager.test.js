const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Charlie', 'charlie@gmail.com', 'Manager');

    expect(manager.name).toBe('Charlie');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('charlie@gmail.com');
    expect(manager.role).toBe('Manager');
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
})