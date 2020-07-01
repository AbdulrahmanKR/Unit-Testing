const sum = require('./sum');

    test('testing sum of two numbers',()=>{
           expect(sum(5,3)).toBe(8);
    });
    test('testing sum of two numbers',()=>{
            expect(sum(5,5)).toBe(10);
        });
    test('testing sum of  negative two numbers',()=>{
            expect(sum(-5,-5)).toBe(-10);
            });