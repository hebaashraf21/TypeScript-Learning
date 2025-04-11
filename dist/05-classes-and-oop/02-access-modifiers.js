"use strict";
class Employee {
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    displayInfo() {
        console.log(`Employee ID: ${this.id}`);
        console.log(`Employee Name: ${this.name}`);
        console.log(`Employee Department: ${this.department}`);
    }
}
const emp1 = new Employee(1, 'Alice', 'HR');
emp1.displayInfo();
// emp1.name; // Error: Property 'name' is private and only accessible within class 'Employee'.
// emp1.department; // Error: Property 'department' is protected and only accessible within class 'Employee' and its subclasses.
//# sourceMappingURL=02-access-modifiers.js.map