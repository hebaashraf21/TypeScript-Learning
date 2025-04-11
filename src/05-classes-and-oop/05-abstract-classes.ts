abstract class Shape1 {
    abstract area(): number;  // Abstract method to be implemented by subclasses

    describe(): string {
        return 'This is a shape.';
    }
}

class Rectangle extends Shape1 {
    constructor(private width: number, private height: number) {
        super();
    }

    // Implementing the abstract method
    area(): number {
        return this.width * this.height;
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.area());       // Output: 50
console.log(rect.describe());   // Output: This is a shape.
