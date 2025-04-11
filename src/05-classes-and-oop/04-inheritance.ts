class Animal1 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog1 extends Animal1 {
    constructor(name: string) {
        super(name);  // Calling the parent class constructor
    }

    speak(): void {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog1('Buddy');
dog.speak();  // Output: Buddy barks.
