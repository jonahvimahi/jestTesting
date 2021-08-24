

const { returnTwo, greeting, add, multiply, divide, subtract } = require("./functions")

test("should return the integer 2", () => {
    expect(returnTwo(2)).toEqual("The number is 2");
});
test("Should return the name parameter", () => {
    expect(greeting("James")).toEqual("Hello, James");

    expect(greeting("Jill")).toEqual("Hello, Jill")
});

describe("math functions", () => {
    test('Should return the sum of two numbers', () => {
        expect(add(1,2)).toEqual(3);
    
        expect(add(5, 9)).toEqual(14)
    });
    test("should return the product of two numbers", () => {
        expect(multiply(2, 5)).toEqual(10);
    
        expect(multiply(10, 10)).toEqual(100)
    });
    test("should divide the two numbers", () => {
        expect(divide(20, 2)).toEqual(10);
    
        expect(divide(18, 2)).toEqual(9)
    })
    test("should subtract", () => {
        expect(subtract(13, 2)).toEqual(11);
    
        expect(subtract(101, 1)).toEqual(100)
    })
    
})