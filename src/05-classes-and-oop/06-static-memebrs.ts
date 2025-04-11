class Calculator {
    // Static property
    static pi: number = 3.14;

    // Static method
    static add(a: number, b: number): number {
        return a + b;
    }

    // Instance method
    multiply(a: number, b: number): number {
        return a * b;
    }
}

// Accessing static members
console.log(Calculator.pi);  // Output: 3.14
console.log(Calculator.add(2, 3));  // Output: 5

const calc = new Calculator();
console.log(calc.multiply(2, 3));  // Output: 6
// Static members belong to the class itself, not to instances of the class.
// This means you can access them without creating an instance of the class.