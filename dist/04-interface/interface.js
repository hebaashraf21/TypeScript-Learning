"use strict";
// 1️⃣ Basic Interface
let person1 = { name: "Heba", age: 24 };
console.log(person1.name);
console.log("_______________________________________________________");
let user1 = { userName: "Heba", email: "H@gmail.com" };
console.log(user1.userName);
console.log(user1.email);
let user2 = { userName: "Heba2", email: "H2@gmail.com", phone: 1234567890 };
console.log(user2.userName);
console.log(user2.email);
console.log(user2.phone); // Optional property
console.log("_______________________________________________________");
const myCar = { model: "Toyota", year: 2020 };
// myCar.model = "Honda"; ❌ Error: Cannot modify a readonly property
myCar.year = 2022; // ✅ Allowed
console.log(myCar);
console.log("_______________________________________________________");
const addFunc = (x, y) => x + y;
console.log(addFunc(10, 5));
console.log("_______________________________________________________");
const colors = ["Red", "Blue", "Green"];
console.log(colors[1]); // Blue
console.log("_______________________________________________________");
const myDog = { species: "Canine", breed: "Labrador" };
console.log(myDog);
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const myCircle = new Circle(5);
console.log(myCircle.area());
console.log("_______________________________________________________");
//# sourceMappingURL=interface.js.map