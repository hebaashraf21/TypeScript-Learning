"use strict";
class Shape1 {
    describe() {
        return 'This is a shape.';
    }
}
class Rectangle extends Shape1 {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    // Implementing the abstract method
    area() {
        return this.width * this.height;
    }
}
const rect = new Rectangle(5, 10);
console.log(rect.area()); // Output: 50
console.log(rect.describe()); // Output: This is a shape.
//# sourceMappingURL=05-abstract-classes.js.map