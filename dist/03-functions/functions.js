"use strict";
// 1️⃣ Function with Type Annotations
function sayHello(name) {
    return `Hello, ${name}`;
}
console.log(sayHello("Heba"));
console.log("_______________________________________________________");
// 2️⃣ Function with Multiple Parameter Types
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
console.log("_______________________________________________________");
// 3️⃣ Function with Optional Parameters
function introduce(name, age) {
    if (age) {
        return `My name is ${name} and I am ${age} years old.`;
    }
    else {
        return `My name is ${name}.`;
    }
}
console.log(introduce("Heba", 24));
console.log(introduce("Heba"));
console.log("_______________________________________________________");
// 4️⃣ Function with Default Parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
console.log(power(3)); // Uses default exponent of 2
console.log(power(3, 3)); // Uses provided exponent of 3
console.log("_______________________________________________________");
// 5️⃣ Function with Rest Parameters (Handling Multiple Arguments)
function sum(...nums) {
    let res = 0;
    nums.forEach((num) => res += num);
    return res;
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log("_______________________________________________________");
// 6️⃣ Arrow Function Example
const square = (num) => num * num;
console.log(square(5));
console.log("_______________________________________________________");
// 7️⃣ Function with an Object as Parameter
function printPerson(person) {
    console.log(`name: ${person.name}, age:${person.age}`);
}
printPerson({ name: "Heba", age: 24 });
console.log("_______________________________________________________");
//# sourceMappingURL=functions.js.map