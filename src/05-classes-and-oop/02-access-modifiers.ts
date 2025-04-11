class Employee {
    // Public property (can be accessed from anywhere)
    public id: number;

    // Private property (can only be accessed inside the class)
    private name: string;

    // Protected property (can be accessed within this class and subclasses)
    protected department: string;

    constructor(id: number, name: string, department: string) {
        this.id = id;
        this.name = name;
        this.department = department;
    }

    public displayInfo(): void {
        console.log(`Employee ID: ${this.id}`);
        console.log(`Employee Name: ${this.name}`);
        console.log(`Employee Department: ${this.department}`);
    }
}

const emp1 = new Employee(1, 'Alice', 'HR');
emp1.displayInfo();
// emp1.name; // Error: Property 'name' is private and only accessible within class 'Employee'.
// emp1.department; // Error: Property 'department' is protected and only accessible within class 'Employee' and its subclasses.