// 1️⃣ Basic Interface

interface Person{
    name:string;
    age:number;
}

let person1: Person ={name:"Heba",age:24};
console.log(person1.name);
console.log("_______________________________________________________");

// 2️⃣ Interface with Optional Properties
interface User{
    userName:string,
    email:string,
    phone?:number
}

let user1:User={ userName:"Heba",email:"H@gmail.com"};
console.log(user1.userName);
console.log(user1.email);   
let user2:User={userName:"Heba2",email:"H2@gmail.com",phone:1234567890};
console.log(user2.userName);
console.log(user2.email);    
console.log(user2.phone); // Optional property
console.log("_______________________________________________________");

// 3️⃣ Interface with Read-Only Properties
interface Car{
    readonly model:string,
    year:number
}

const myCar: Car = { model: "Toyota", year: 2020 };
// myCar.model = "Honda"; ❌ Error: Cannot modify a readonly property
myCar.year = 2022; // ✅ Allowed
console.log(myCar);
console.log("_______________________________________________________");

// 4️⃣ Interface for Function Types
interface MathOperation {
    (a: number, b: number): number;
}

const addFunc: MathOperation = (x, y) => x + y;
console.log(addFunc(10, 5));
console.log("_______________________________________________________");

// 5️⃣ Interface for Arrays
interface StringArray {
    [index: number]: string;
}

const colors: StringArray = ["Red", "Blue", "Green"];
console.log(colors[1]); // Blue
console.log("_______________________________________________________");


// 6️⃣ Extending Interfaces (Inheritance)
interface Animal {
    species: string;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = { species: "Canine", breed: "Labrador" };
console.log(myDog);

// 7️⃣  Using Interfaces with Classes
interface Shape {
    area(): number;
}

class Circle implements Shape {
    constructor(private radius: number) { }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.area());
console.log("_______________________________________________________");