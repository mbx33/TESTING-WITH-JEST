const { expect, test } = require('@jest/globals');
const { returnTwo, greeting, add, subtract, multiply, divide } = require('./functions');

test('return2 should return an integer of 2', function() {
    expect(returnTwo(5)).toBe(2)
});


describe('greeting tests', function() {
    test('greet the person', function() {
        expect(greeting("James")).toBe("Hello, James.")
    })
    test('greets the person', function() {
        expect(greeting("Jill")).toBe("Hello, Jill.")
    })
})

describe('Add tests', function() {
    test('add func adds two numbers', function() {
        expect(add(1, 2)).toEqual(3)
    })
    test('add func adds two numbers', function() {
        expect(add(5, 9)).toBe(14)
    })
    test('subtract func subtracts two', function() {
        expect(subtract(10, 5)).toBe(5)
    })
    test('multiply func multiplies two numbers', function() {
        expect(multiply(5, 4)).toBeGreaterThan(15)
    })
    test('divide will divide two numbers', function() {
        expect(divide(10, 5)).toBe(2)
    })
})

// test("Should return the int two.", ()=>{expect(returnTwo()).toBe(2)});
// test("Should greet the person.", () => {expect(greeting("James")).toEqual("Hello, James.")});
// test("Should greet the person.", () => {expect(greeting("Jill")).toBe("Hello, Jill.")});
// test("Should add up the numbers, yo!", ()=> {expect(add(1,2)).toEqual(3)});
// test("Should add up the numbers, yo!", ()=> {expect(add(5,9)).toBe(14)});