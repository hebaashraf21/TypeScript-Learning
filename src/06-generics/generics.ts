// 1. Generic Function
// A generic function that works with any type of input and returns it back

function identity<T>(value: T): T {
    return value;
}

console.log(identity(5)); // Output: 5 (number)
console.log(identity("Hello, TypeScript!")); // Output: "Hello, TypeScript!" (string)
console.log(identity([1, 2, 3])); // Output: [1, 2, 3] (array)
console.log("_______________________________________________________");

// 2. Generic with Multiple Types (Tuple)
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

const swapped = swap([1, "hello"]);
console.log(swapped); // Output: ["hello", 1]
console.log("_______________________________________________________");

// 3. Generic Constraints
// We can restrict the type of T using constraints, ensuring that the type T has a particular shape.

interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(value: T): void {
    console.log(value.length);
}

logLength("Hello, world!"); // Output: 13 (length of string)
logLength([1, 2, 3, 4]); // Output: 4 (length of array)
//logLength(42); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
console.log("_______________________________________________________");


// 4. Generic Class
// We can create classes that work with different types using generics.

class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box(42);
console.log(numberBox.getValue()); // Output: 42

const stringBox = new Box("TypeScript is fun!");
console.log(stringBox.getValue()); // Output: "TypeScript is fun!"
console.log("_______________________________________________________");

// 5. Generic Interface
// Creating a generic interface for objects

interface Pair<T, U> {
    first: T;
    second: U;
}

const pair: Pair<number, string> = {
    first: 1,
    second: "One"
};

console.log(pair); // Output: { first: 1, second: "One" }
console.log("_______________________________________________________");

// 6. Using Generics with Arrays
function wrapInArray<T>(value: T): T[] {
    return [value];
}

const numberArray = wrapInArray(10);
const stringArray = wrapInArray("Hello");
console.log(numberArray); // Output: [10]
console.log(stringArray); // Output: ["Hello"]
console.log("_______________________________________________________");

// 7. Generic Default Values
function createArray<T = string>(length: number, value: T): T[] {
    return Array(length).fill(value);
}

console.log(createArray(3, "hello")); // Output: ["hello", "hello", "hello"]
console.log(createArray(3, 42)); // Output: [42, 42, 42]
