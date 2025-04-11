"use strict";
class Car1 {
    constructor(model) {
        this.model = model;
    }
    move() {
        console.log(`${this.model} is moving.`);
    }
}
class Boat {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is sailing.`);
    }
}
const car = new Car1('Tesla');
car.move(); // Output: Tesla is moving.
const boat = new Boat('Yacht');
boat.move(); // Output: Yacht is sailing.
//# sourceMappingURL=07-interface-classes.js.map