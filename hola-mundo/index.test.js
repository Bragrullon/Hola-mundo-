const holaMundo = require('./index');

test('saluda al mundo', () => {
    expect(holaMundo()).toBe('Hola, Mundo!');
});