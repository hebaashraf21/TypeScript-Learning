"use strict";
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog1 extends Animal1 {
    constructor(name) {
        super(name); // Calling the parent class constructor
    }
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const dog = new Dog1('Buddy');
dog.speak(); // Output: Buddy barks.
//# sourceMappingURL=04-inheritance.js.map