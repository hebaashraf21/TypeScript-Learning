"use strict";
// 1. Generic Function
// A generic function that works with any type of input and returns it back
function identity(value) {
    return value;
}
console.log(identity(5)); // Output: 5 (number)
console.log(identity("Hello, TypeScript!")); // Output: "Hello, TypeScript!" (string)
console.log(identity([1, 2, 3])); // Output: [1, 2, 3] (array)
console.log("_______________________________________________________");
// 2. Generic with Multiple Types (Tuple)
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
const swapped = swap([1, "hello"]);
console.log(swapped); // Output: ["hello", 1]
console.log("_______________________________________________________");
function logLength(value) {
    console.log(value.length);
}
logLength("Hello, world!"); // Output: 13 (length of string)
logLength([1, 2, 3, 4]); // Output: 4 (length of array)
//logLength(42); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
console.log("_______________________________________________________");
// 4. Generic Class
// We can create classes that work with different types using generics.
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const numberBox = new Box(42);
console.log(numberBox.getValue()); // Output: 42
const stringBox = new Box("TypeScript is fun!");
console.log(stringBox.getValue()); // Output: "TypeScript is fun!"
console.log("_______________________________________________________");
const pair = {
    first: 1,
    second: "One"
};
console.log(pair); // Output: { first: 1, second: "One" }
console.log("_______________________________________________________");
// 6. Using Generics with Arrays
function wrapInArray(value) {
    return [value];
}
const numberArray = wrapInArray(10);
const stringArray = wrapInArray("Hello");
console.log(numberArray); // Output: [10]
console.log(stringArray); // Output: ["Hello"]
console.log("_______________________________________________________");
// 7. Generic Default Values
function createArray(length, value) {
    return Array(length).fill(value);
}
console.log(createArray(3, "hello")); // Output: ["hello", "hello", "hello"]
console.log(createArray(3, 42)); // Output: [42, 42, 42]
//# sourceMappingURL=generics.js.map