"use strict";
class Calculator {
    // Static method
    static add(a, b) {
        return a + b;
    }
    // Instance method
    multiply(a, b) {
        return a * b;
    }
}
// Static property
Calculator.pi = 3.14;
// Accessing static members
console.log(Calculator.pi); // Output: 3.14
console.log(Calculator.add(2, 3)); // Output: 5
const calc = new Calculator();
console.log(calc.multiply(2, 3)); // Output: 6
// Static members belong to the class itself, not to instances of the class.
// This means you can access them without creating an instance of the class.
//# sourceMappingURL=06-static-memebrs.js.map