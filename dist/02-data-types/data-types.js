"use strict";
// 1️⃣ String Type
let message = "Hello, TypeScript!";
console.log(message);
// 2️⃣ Number Type
let age = 25;
let price = 9.99;
console.log(`Age: ${age}, Price: $${price}`);
// 3️⃣ Boolean Type
let isDone = true;
console.log(`Task Completed: ${isDone}`);
// 4️⃣ Array Type
let numbers = [1, 2, 3, 4, 5]; // Array of numbers
let fruits = ["Apple", "Banana", "Cherry"]; // Alternative syntax
console.log(numbers, fruits);
// 5️⃣ Tuple Type (Fixed-length array with specific types)
let person = ["John", 30];
console.log(`Name: ${person[0]}, Age: ${person[1]}`);
// 6️⃣ Enum Type (Defines a set of named constants)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
let favoriteColor = Color.Green;
console.log(`Favorite Color: ${favoriteColor}`); // Output: 1
// 7️⃣ Any Type (Flexible but avoid using too much)
let randomValue = "Hello";
randomValue = 42;
randomValue = true;
console.log(randomValue);
// 8️⃣ Void Type (Used for functions that don't return a value)
function greet() {
    console.log("Hello, welcome!");
}
greet();
// 9️⃣ Null & Undefined Types
let nothing = null;
let notAssigned = undefined;
console.log(nothing, notAssigned);
// 🔟 Union Type (Allow multiple types)
let id;
id = "ABC123";
console.log(id);
id = 1001;
console.log(id);
//# sourceMappingURL=data-types.js.map