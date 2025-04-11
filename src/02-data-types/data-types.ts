// 1️⃣ String Type
let message: string = "Hello, TypeScript!";
console.log(message);

// 2️⃣ Number Type
let age: number = 25;
let price: number = 9.99;
console.log(`Age: ${age}, Price: $${price}`);

// 3️⃣ Boolean Type
let isDone: boolean = true;
console.log(`Task Completed: ${isDone}`);

// 4️⃣ Array Type
let numbers: number[] = [1, 2, 3, 4, 5]; // Array of numbers
let fruits: Array<string> = ["Apple", "Banana", "Cherry"]; // Alternative syntax
console.log(numbers, fruits);

// 5️⃣ Tuple Type (Fixed-length array with specific types)
let person: [string, number] = ["John", 30];
console.log(`Name: ${person[0]}, Age: ${person[1]}`);

// 6️⃣ Enum Type (Defines a set of named constants)
enum Color {
    Red, // 0
    Green, // 1
    Blue // 2
}
let favoriteColor: Color = Color.Green;
console.log(`Favorite Color: ${favoriteColor}`); // Output: 1

// 7️⃣ Any Type (Flexible but avoid using too much)
let randomValue: any = "Hello";
randomValue = 42;
randomValue = true;
console.log(randomValue);

// 8️⃣ Void Type (Used for functions that don't return a value)
function greet(): void {
    console.log("Hello, welcome!");
}
greet();

// 9️⃣ Null & Undefined Types
let nothing: null = null;
let notAssigned: undefined = undefined;
console.log(nothing, notAssigned);

// 🔟 Union Type (Allow multiple types)
let id: string | number;
id = "ABC123";
console.log(id);
id = 1001;
console.log(id);
