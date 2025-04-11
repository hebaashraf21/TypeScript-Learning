interface Movable {
    move(): void;
}

class Car1 implements Movable {
    constructor(private model: string) { }

    move(): void {
        console.log(`${this.model} is moving.`);
    }
}

class Boat implements Movable {
    constructor(private name: string) { }

    move(): void {
        console.log(`${this.name} is sailing.`);
    }
}

const car = new Car1('Tesla');
car.move();  // Output: Tesla is moving.

const boat = new Boat('Yacht');
boat.move();  // Output: Yacht is sailing.
